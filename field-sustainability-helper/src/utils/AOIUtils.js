import { services } from "../configs/default";

import Query from "@arcgis/core/rest/support/Query";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

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
  soilsQuery.outSpatialReference = geometry.spatialReference;

  const results = await soilsLayer.queryFeatures(soilsQuery);
  let soils_count = {};
  for (const feature_ind in results?.features) {
    const feature = results.features[feature_ind];
    const muname = feature.attributes["muname"];
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

const HEALTH_STRINGS = ["BAD", "OKAY", "GOOD", "GREAT"];
export async function getHealth(geometry, apiKey = null) {
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
  soilsQuery.outSpatialReference = geometry.spatialReference;

  const results = await soilsLayer.queryFeatures(soilsQuery);
  let total_tfact = 0;
  const count = results?.features.length;
  for (const feature_ind in results?.features) {
    const feature = results.features[feature_ind];
    total_tfact += feature.attributes["tfact"];
  }
  const average_tfact = total_tfact / count;

  const health_ind = Math.min(average_tfact, HEALTH_STRINGS.length - 1);
  return HEALTH_STRINGS[health_ind];
}

export function getAcreage(geometry) {
  if (!geometry || geometry?.type !== "polygon") return null;

  return geometryEngine.geodesicArea(geometry, "acres");
}
