import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";

import React, { useEffect, useState, useRef } from "react";

function InputPane({ sketchLabel, view, drawnGeometry }) {
  const [topCrops, setTopCrops] = useState(null);
  const [health, setHealth] = useState(null);
  const [acres, setAcres] = useState(null);

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
      <EsriSketch label={sketchLabel} view={view}></EsriSketch>
      <AnalysisResult
        topCrops={"sample crop"}
        health={"GOOD"}
        acres={5.56}
      ></AnalysisResult>
    </div>
  );
}

export default InputPane;
