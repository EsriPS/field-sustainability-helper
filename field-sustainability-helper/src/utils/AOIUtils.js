import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

export function getSoils(geometry) {
  if (!geometry) return null;

  return { top_crops: ["corn", "wheat", "potato"] };
}

const HEALTH_STRINGS = ["BAD", "OKAY", "GOOD", "GREAT"];
export function getHealth(geometry) {
  if (!geometry) return null;

  return HEALTH_STRINGS[3];
}

export function getAcreage(geometry) {
  if (!geometry) return null;

  return geometryEngine.geodesicArea(geometry, "acres");
}
