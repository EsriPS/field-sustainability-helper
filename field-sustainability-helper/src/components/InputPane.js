import Sketch from "@arcgis/core/widgets/Sketch";

import React, { useEffect, useState, useRef } from "react";

function InputPane({ label, view }) {
  const sketchRef = useRef(null);

  // const [state, setState] = useState({});

  useEffect(() => {
    if (view) {

      const gLayer = view.map.layers.items.filter(x => x.id === 'temp_graphics_layer')[0];

      const sketchWidget = new Sketch({
        view: view,
        layer: gLayer,
        container: sketchRef.current,
        visibleElements: {
          createTools: {
            point: false,
            polyline: false
          },
          selectionTools: {
            "lasso-selection": false,
            "rectangle-selection": false
          },
          undoRedoMenu: false,
          settingsMenu: false
        }
      });    
    }
  }, [view]);


  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        width: "450px",
        borderRight: "solid",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ marginLeft: "4px", marginTop: "4px", fontWeight: "bold", fontSize: "16px" }}>
        {label}
      </div>
      <div style={{ marginLeft: "4px", marginTop: "10px"}} ref={sketchRef}></div>
    </div>
  );
}

export default InputPane;
