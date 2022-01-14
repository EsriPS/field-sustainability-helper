export const apiKey =
  "AAPK08d0fd9c452b46ffabbb8d876d30109cmRMtSbKcU7QOxl41q5uCI2ghUU-VDpzj2yXeEBJFim983uMHX5_4V-0wtvGcdkZt";

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
    erosion:
      "https://landscape11.arcgis.com/arcgis/rest/services/USA_Soils_Erosion_Class/ImageServer",
    ssurgo:
      "https://landscape11.arcgis.com/arcgis/rest/services/USA_Soils_Hydrologic_Group/ImageServer",
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
  acres: "Acres",
  soilType: "Soil Type",
  soilHealth: "Soil Health",
  crops20: "2020 Crops",
  slope: "Slope",
  health19: "2019 Health",
  erosionClass: "Erosion Class",
  health5Year: "5 Year Health",
  soilsLayer: "SSURGO Soil",
  naipLayer: "USA NAIP",
  croplandLayer: "USDA Cropland",
  sustainabilityButton: "Get my sustainability score",
  tillInput: "Did you till last year?",
  plantInput: "Did you plant cover crops?",
  rotateInput: "Did you rotate crops this year?",
  irrigatedInput: "Are you irrigated?",
  submitButton: "Submit",
};
