import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { strings, items } from "./configs/default";
import Header from "./components/Header";
import EsriMap from "./components/EsriMap";
import LeftSidebar from "./components/LeftSidebar";

// Calcite:
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";

import "@esri/calcite-components/dist/calcite/calcite.css";

import { CalciteShell } from "@esri/calcite-components-react";
// import { CalciteShellPanel } from "@esri/calcite-components-react";

import React, { useState } from "react";

function App() {
  const [view, setView] = useState(null);

  function setMapView(mapView) {
    setView(mapView);
  }

  return (
    <div className="App">
      <CalciteShell>
        <Header title={strings.title}></Header>

        <LeftSidebar
          sketchLabel={strings.sketchLabel}
          view={view}
        ></LeftSidebar>

        <EsriMap webMapId={items.webMap} setView={setMapView}></EsriMap>
      </CalciteShell>
    </div>
  );
}

export default App;
