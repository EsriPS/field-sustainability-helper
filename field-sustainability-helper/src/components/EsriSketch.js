import Sketch from "@arcgis/core/widgets/Sketch";

import React, { useEffect, useState, useRef } from "react";

function EsriSketch({ label, view, onSketchResultGraphic }) {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (view) {
      const gLayer = view.map.layers.items.filter(
        (x) => x.id === "temp_graphics_layer"
      )[0];

      const sketchWidget = new Sketch({
        view: view,
        layer: gLayer,
        container: sketchRef.current,
        visibleElements: {
          createTools: {
            point: false,
            polyline: false,
          },
          selectionTools: {
            "lasso-selection": false,
            "rectangle-selection": false,
          },
          undoRedoMenu: false,
          settingsMenu: false,
        },
      });

      // Listen to sketch widget's create event.
      sketchWidget.on("create", function (evt) {
        // check if the create event's state has changed to complete indicating
        // the graphic create operation is completed.
        if (evt.state === "complete") {
          onSketchResultGraphic(evt.graphic);
        }
      });
    }
  }, [view]);

  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {label}
      </div>
      <div
        style={{ marginLeft: "4px", marginTop: "10px" }}
        ref={sketchRef}
      ></div>
    </div>
  );
}

export default EsriSketch;
