export const apiKey = "REPLACEME";

export const services = {
  feature: {
    soils:
      "https://landscape11.arcgis.com/arcgis/rest/services/USA_Soils_Map_Units/FeatureServer/0",
  },
  image: {
    naip: "https://naip.arcgis.com/arcgis/rest/services/NAIP/ImageServer",
    elevation:
      "https://elevation.arcgis.com/arcgis/rest/services/NED30m/ImageServer",
    crops:
      "https://pdiimagery.azurecloudgov.us/arcgis/rest/services/CDL_WM/ImageServer",
  },
};

export const items = {
  webMap: "9a04ad6bf1af4d15b0d67b2ce757abec",
  // The public web map owned by Gavin is 9a04ad6bf1af4d15b0d67b2ce757abec
  // The non-public web map created by Elvis is 42888764fe474d52807db4cbfd0d4ac2
  // (https://esriag.maps.arcgis.com/home/item.html?id=42888764fe474d52807db4cbfd0d4ac2)
  // ... but that requires login, we we need to figure that out.
};

export const strings = {
  title: "FiSH (Field Sustainability Helper)",
  sketchLabel: "Draw Field Boundary",
};