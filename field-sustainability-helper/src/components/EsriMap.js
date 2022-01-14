import { services, strings } from "../configs/default";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import Basemap from "@arcgis/core/Basemap";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import esriConfig from "@arcgis/core/config";
import { apiKey } from "../configs/default";

import React, { useEffect, useRef } from "react";

function EsriMap({ webMapId, setView }) {
  const viewDiv = useRef(null);

  useEffect(() => {
    if (viewDiv) {
      esriConfig.apiKey = apiKey;

      const webMap = new WebMap({
        portalItem: {
          id: webMapId,
        },
      });

      const gLayer = new GraphicsLayer({
        id: "temp_graphics_layer",
        title: "Sketch Layer",
      });
      webMap.add(gLayer);

      const view = new MapView({
        map: webMap,
        container: viewDiv.current,
      });

      setView(view);

      const soilBasemap = new Basemap({
        baseLayers: [
          new ImageryLayer({
            url: services.image.ssurgo,
          }),
        ],
        title: strings.soilsLayer,
        // thumbnailUrl: ???
      });

      const naipBasemap = new Basemap({
        baseLayers: [
          new ImageryLayer({
            url: services.image.naip,
          }),
        ],
        title: strings.naipLayer,
        // thumbnailUrl: ???
      });

      const cropBasemap = new Basemap({
        baseLayers: [
          new ImageryLayer({
            url: services.image.crops,
          }),
        ],
        title: strings.croplandLayer,
        // thumbnailUrl: ???
      });

      const defaultBasemap = Basemap.fromId("arcgis-imagery-standard");

      const basemapGalleryWidget = new BasemapGallery({
        view: view,
        source: [defaultBasemap, soilBasemap, naipBasemap, cropBasemap],
      });

      view.ui.add(basemapGalleryWidget, {
        position: "top-right",
      });
    }
  }, [webMapId]);

  return (
    <div>
      <div
        ref={viewDiv}
        style={{ height: "calc(100vh - 60px)", width: "calc(100vw - 450px)" }}
      ></div>
    </div>
  );
}

export default EsriMap;
