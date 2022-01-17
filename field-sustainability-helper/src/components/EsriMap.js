import { apiKey } from "../configs/default";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import Search from "@arcgis/core/widgets/Search";
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
        group: "bottom-right",
      });

      view.ui.move("zoom", "bottom-right");

      view.ui.add(searchWidget, {
        position: "top-right",
      });

      view.ui.add(layerListExpand, "bottom-right");
    }
  }, [webMapId]);

  return <div ref={viewDiv} style={{ height: "100%", width: "100%" }}></div>;
}

export default EsriMap;
