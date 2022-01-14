import { services } from "../configs/default";

import Query from "@arcgis/core/rest/support/Query";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ImageHistogramParameters from "@arcgis/core/rest/support/ImageHistogramParameters";

export async function getStatisticsHistograms(
  url,
  geometry,
  view,
  apiKey = null
) {
  if (
    !geometry ||
    (geometry?.type !== "polygon" && geometry?.type !== "extent")
  )
    return null;

  const layer = new ImageryLayer({ url, apiKey });

  const params = new ImageHistogramParameters({
    geometry,
    pixelSize: {
      x: view.resolution,
      y: view.resolution,
      spatialReference: {
        wkid: view.spatialReference.wkid,
      },
    },
  });

  return await layer.computeStatisticsHistograms(params);
}

export async function getCropsStatisticsHistograms(
  geometry,
  view,
  apiKey = null
) {
  return await getStatisticsHistograms(
    services.image.crops,
    geometry,
    view,
    apiKey
  );
}

export async function getElevationStatisticsHistograms(
  geometry,
  view,
  apiKey = null
) {
  return await getStatisticsHistograms(
    services.image.elevation,
    geometry,
    view,
    apiKey
  );
}

export async function getNaipStatisticsHistograms(
  geometry,
  view,
  apiKey = null
) {
  return await getStatisticsHistograms(
    services.image.naip,
    geometry,
    view,
    apiKey
  );
}

export async function getErosionStatisticsHistograms(
  geometry,
  view,
  apiKey = null
) {
  return await getStatisticsHistograms(
    services.image.erosion,
    geometry,
    view,
    apiKey
  );
}

// SCORE CLOSER TO 100 == GOOD, SCORE CLOSER TO 0 == BAD
export async function calculateErosionScore(geometry, view, apiKey = null) {
  const results = await getErosionStatisticsHistograms(geometry, view, apiKey);

  if (results.statistics.length > 0) {
    return 100 * (1 - results.statistics[0].avg / 4);
  }

  return 0;
}

export async function getSoils(geometry, apiKey = null) {
  if (
    !geometry ||
    (geometry?.type !== "polygon" && geometry?.type !== "extent")
  )
    return null;

  const soilsLayer = new FeatureLayer({ url: services.feature.soils, apiKey });

  const soilsQuery = new Query();
  soilsQuery.where = "1=1";
  soilsQuery.outFields = "*";
  soilsQuery.geometry = geometry;
  soilsQuery.returnGeometry = true;
  soilsQuery.outSpatialReference = geometry.spatialReference;

  const results = await soilsLayer.queryFeatures(soilsQuery);
  let soils_count = {};
  let random_colors = {};
  for (const feature_ind in results?.features) {
    const feature = results.features[feature_ind];
    const feature_geometry = feature.geometry;
    const clipped_geometry = geometryEngine.intersect(
      geometry,
      feature_geometry
    );
    const mukey = feature.attributes["mukey"];
    if (!random_colors.hasOwnProperty(mukey)) {
      random_colors[mukey] = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        0.8,
      ];
    }
    const muname = feature.attributes["muname"];
    results.features[feature_ind].geometry = clipped_geometry;
    results.features[feature_ind].symbol = {
      type: "simple-fill",
      color: random_colors[mukey],
      outline: {
        color: "black",
        width: "0.5px",
      },
    };
    if (soils_count.hasOwnProperty(muname)) soils_count[muname] += 1;
    else soils_count[muname] = 0;
  }

  const soils_count_sorted = Object.keys(soils_count).sort((a, b) => {
    return soils_count[b] - soils_count[a];
  });

  return {
    top_crops: soils_count_sorted.slice(0, 3),
    all_results: results?.features,
  };
}

// SCORE BASED ON EROSION SCORE (FOR NOW)
const HEALTH_STRINGS = ["BAD", "OKAY", "GOOD", "GREAT"];
export async function getHealth(geometry, view, apiKey = null) {
  if (
    !geometry ||
    (geometry?.type !== "polygon" && geometry?.type !== "extent")
  )
    return null;

  const erosionScore = await calculateErosionScore(geometry, view, apiKey);
  const health_ind = Math.min(
    Math.floor(erosionScore * (4 / 100)),
    HEALTH_STRINGS.length - 1
  );

  return HEALTH_STRINGS[health_ind];
}

export function getAcreage(geometry) {
  if (!geometry || geometry?.type !== "polygon") return null;

  return geometryEngine.geodesicArea(geometry, "acres");
}
