import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import Header from "./components/Header";
import EsriMap from "./components/EsriMap";
import InputPane from "./components/InputPane";

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
        title="FiSH (Field Sustainability Helper)"
      ></Header>
      <section className="container">
        <InputPane label="Draw Field Boundary" view={view}></InputPane>
        <EsriMap webMapId={"e691172598f04ea8881cd2a4adaa45ba"} setView={setMapView}></EsriMap>
      </section>
    </div>
  );
}

export default App;
