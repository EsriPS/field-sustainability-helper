import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { strings, items } from "./configs/default";
import Header from "./components/Header";
import EsriMap from "./components/EsriMap";
import LeftSidebar from "./components/LeftSidebar";

import React, { useEffect, useState, useRef } from "react";

function App() {
  const [view, setView] = useState(null);

  function setMapView(mapView) {
    setView(mapView);
  }

  return (
    <div className="App">
      <Header
        color="white"
        backgroundColor="#212121"
        title={strings.title}
      ></Header>
      <section className="container">
        <LeftSidebar sketchLabel={strings.sketchLabel} view={view}></LeftSidebar>
        <EsriMap webMapId={items.webMap} setView={setMapView}></EsriMap>
      </section>
    </div>
  );
}

export default App;
