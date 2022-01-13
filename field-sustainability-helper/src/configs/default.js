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
  webMap: "e691172598f04ea8881cd2a4adaa45ba",
};

export const strings = {
  title: "FiSH (Field Sustainability Helper)",
  sketchLabel: "Draw Field Boundary",
};
