import { services } from "../configs/default";

import Query from "@arcgis/core/rest/support/Query";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ImageHistogramParameters from "@arcgis/core/rest/support/ImageHistogramParameters";
import RasterFunction from "@arcgis/core/layers/support/RasterFunction";
import MosaicRule from "@arcgis/core/layers/support/MosaicRule";
import TimeExtent from "@arcgis/core/TimeExtent";

export async function getStatisticsHistograms(
  url,
  geometry,
  view,
  apiKey = null,
  renderingRule = null,
  mosaicRule = null,
  timeExtent = null
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
    renderingRule,
    mosaicRule,
    timeExtent,
  });

  const statisticsHistograms = await layer.computeStatisticsHistograms(params);
  let attributeMapping = [];
  if (!renderingRule) renderingRule = layer.renderingRule;
  const rasterInfo = await layer.generateRasterInfo(renderingRule);
  if (rasterInfo.attributeTable)
    attributeMapping = rasterInfo.attributeTable.features;

  return { statisticsHistograms, attributeMapping };
}

export async function getErosionClass(geometry, view, apiKey = null) {
  const results = await getStatisticsHistograms(
    services.image.erosion,
    geometry,
    view,
    apiKey
  );

  const statisticsHistograms = results.statisticsHistograms;
  const attributeMapping = results.attributeMapping;

  if (statisticsHistograms.statistics.length > 0) {
    const mode = statisticsHistograms.statistics[0].mode;
    return {
      class: mode,
      description: attributeMapping[mode].attributes.description,
    };
  }

  return 0;
}

export async function getAvgSlope(geometry, view, apiKey = null) {
  const slopeRF = new RasterFunction();
  slopeRF.functionName = "Slope_Percent";

  const results = await getStatisticsHistograms(
    services.image.elevation,
    geometry,
    view,
    apiKey,
    slopeRF
  );

  const statisticsHistograms = results.statisticsHistograms;

  if (statisticsHistograms.statistics.length > 0) {
    return statisticsHistograms.statistics[0].avg;
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
  let soilsCount = {};
  let randomColors = {};
  for (const featureInd in results?.features) {
    const feature = results.features[featureInd];
    const featureGeometry = feature.geometry;
    const clippedGeometry = geometryEngine.intersect(geometry, featureGeometry);
    const mukey = feature.attributes["mukey"];
    if (!randomColors.hasOwnProperty(mukey)) {
      randomColors[mukey] = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        0.8,
      ];
    }
    const muname = feature.attributes["muname"];
    results.features[featureInd].geometry = clippedGeometry;
    results.features[featureInd].symbol = {
      type: "simple-fill",
      color: randomColors[mukey],
      outline: {
        color: "black",
        width: "0.5px",
      },
    };
    if (soilsCount.hasOwnProperty(muname)) soilsCount[muname] += 1;
    else soilsCount[muname] = 0;
  }

  const soilsCountSorted = Object.keys(soilsCount).sort((a, b) => {
    return soilsCount[b] - soilsCount[a];
  });

  return {
    topSoils: soilsCountSorted.slice(0, 3),
    allResults: results?.features,
  };
}

export async function getCrops(geometry, view, year = 2020, apiKey = null) {
  const cropsRF = new RasterFunction();
  cropsRF.functionName = "croptypes";

  const cropsMR = new MosaicRule();
  cropsMR.where = `Year = ${year}`;

  const results = await getStatisticsHistograms(
    services.image.crops,
    geometry,
    view,
    apiKey,
    cropsRF,
    cropsMR
  );

  const statisticsHistograms = results.statisticsHistograms;
  const attributeMapping = results.attributeMapping;
  let cropCount = {};

  if (statisticsHistograms.histograms.length > 0) {
    attributeMapping.forEach((am, index) => {
      const count = statisticsHistograms.histograms[0].counts[index];
      if (count > 0) cropCount[am.attributes["Class_Name"]] = count;
    });
  }

  const cropCountSorted = Object.keys(cropCount).sort((a, b) => {
    return cropCount[b] - cropCount[a];
  });

  return {
    topCrops: cropCountSorted.slice(0, 3),
  };
}

export async function getAvgNdvi(geometry, view, year = 2020, apiKey = null) {
  const ndviRF = new RasterFunction();
  ndviRF.functionName = "NaturalColor";

  const ndviMR = new MosaicRule();
  ndviMR.where = `Year = ${year}`;

  const results = await getStatisticsHistograms(
    services.image.naip,
    geometry,
    view,
    apiKey,
    ndviRF,
    ndviMR
  );

  const statisticsHistograms = results.statisticsHistograms;
  const attributeMapping = results.attributeMapping;

  if (statisticsHistograms.statistics.length > 0) {
    return statisticsHistograms.statistics[0].avg;
  }

  return 0;
}

// SCORE BASED ON EROSION SCORE (FOR NOW)
const HEALTH_STRINGS = ["BAD", "OKAY", "GOOD", "GREAT"];
export async function getSoilHealth(geometry, view, apiKey = null) {
  if (
    !geometry ||
    (geometry?.type !== "polygon" && geometry?.type !== "extent")
  )
    return null;

  const erosionInfo = await getErosionClass(geometry, view, apiKey);
  const erosionClass = erosionInfo.class;
  const erosionScore = 100 * (1 - erosionClass / 4);
  const healthInd = Math.min(
    Math.floor(erosionScore * (4 / 100)),
    HEALTH_STRINGS.length - 1
  );

  return HEALTH_STRINGS[healthInd];
}

export function getAcreage(geometry) {
  if (!geometry || geometry?.type !== "polygon") return null;

  return geometryEngine.geodesicArea(geometry, "acres");
}
