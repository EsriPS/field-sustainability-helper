import { services, strings, apiKey } from "../configs/default";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import Basemap from "@arcgis/core/Basemap";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LayerList from "@arcgis/core/widgets/LayerList";
import Search from "@arcgis/core/widgets/Search";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import Expand from "@arcgis/core/widgets/Expand";
import esriConfig from "@arcgis/core/config";

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

      const searchWidget = new Search({
        view: view,
      });

      const layerList = new LayerList({
        view: view,
      });

      const layerListExpand = new Expand({
        view: view,
        content: layerList,
        group: "top-left",
      });

      const basemapSwitcher = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-streets",
      });

      const basemapSwitcherExpand = new Expand({
        expandIconClass: "esri-icon-basemap",
        view: view,
        content: basemapSwitcher,
        group: "top-right",
      });

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

      const basemapGalleryWidget = new BasemapGallery({
        view: view,
        source: [soilBasemap, naipBasemap, cropBasemap],
      });

      const basemapGalleryExpand = new Expand({
        expandIconClass: "esri-icon-layers",
        view: view,
        content: basemapGalleryWidget,
        group: "top-right",
      });

      view.ui.add(searchWidget, {
        position: "top-right",
      });

      view.ui.add([basemapSwitcherExpand, basemapGalleryExpand], "top-right");

      view.ui.add(layerListExpand, "top-left");
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
