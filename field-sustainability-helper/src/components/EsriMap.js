import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Extent from "@arcgis/core/geometry/Extent";

import React, { useEffect, useState, useRef } from "react";

function EsriMap({ webMapId, setView }) {
  const viewDiv = useRef(null);

  const [state, setState] = useState({});

  useEffect(() => {
    if (viewDiv) {
      const webMap = new WebMap({
        portalItem: {
          id: webMapId,
        },
      });

      const gLayer = new GraphicsLayer({
        id: "temp_graphics_layer",
        title: "Sketch Layer"
      });
      webMap.add(gLayer);

      const view = new MapView({
        map: webMap,
        container: viewDiv.current,
      });


      setView(view);

      // setState({ ...state, ...{ webMap, view } });
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
