import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";
import Extent from "@arcgis/core/geometry/Extent";

import React, { useEffect, useState, useRef } from "react";

function EsriMap({ webMapId }) {
  const viewDiv = useRef(null);

  const [state, setState] = useState({});

  useEffect(() => {
    if (viewDiv) {
      const webMap = new WebMap({
        portalItem: {
          id: webMapId,
        },
      });

      const view = new MapView({
        map: webMap,
        container: viewDiv.current,
      });

      // setState({ ...state, ...{ webMap, view } });
    }
  }, [webMapId]);

  return (
    <div>
      <div
        ref={viewDiv}
        style={{ height: "calc(100vh - 60px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default EsriMap;
