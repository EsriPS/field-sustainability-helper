import Sketch from "@arcgis/core/widgets/Sketch";

import React, { useEffect, useRef } from "react";

function EsriSketch({ label, view, onSketchResultGraphic }) {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (view) {
      const gLayer = view.map.layers.items.filter(
        (x) => x.id === "temp_graphics_layer"
      )[0];

      // Esri widgets REPLACE the DOM node we sent in, so we need to create a
      // "parent" DOM node so we can properly destroy the contents on the unload.
      const domNode = document.createElement("div");
      sketchRef.current.appendChild(domNode);

      const sketchWidget = new Sketch({
        view: view,
        layer: gLayer,
        container: domNode,
        creationMode: "single",
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
      const createWatchHandle = sketchWidget.on("create", function (evt) {
        // check if the create event's state has changed to complete indicating
        // the graphic create operation is completed.
        if (evt.state === "complete") {
          onSketchResultGraphic(evt.graphic);
        }

        // When the drawing is starting, remove any previously drawn graphics
        if (evt.state === "start") {
          gLayer.removeAll();
        }
      });

      // Listen to sketch widget's update event.
      const updateWatchHandle = sketchWidget.on("update", (evt) => {
        if (evt.state === "complete") {
          onSketchResultGraphic(evt.graphics[0]);
        }
      });

      return () => {
        // Cleanup the widget and any event handles
        if (sketchWidget && createWatchHandle && updateWatchHandle) {
          createWatchHandle.remove();
          updateWatchHandle.remove();
          sketchWidget.destroy();
        }
      };
    }
  }, [view, onSketchResultGraphic]);

  return (
    <div style={{ marginLeft: "4px", marginTop: "10px" }} ref={sketchRef}></div>
  );
}

export default EsriSketch;
