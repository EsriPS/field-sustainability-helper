// This component is the "left hand sidebar"

import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";

import { getSoils, getHealth, getAcreage } from "../utils/AOIUtils";
import { apiKey } from "../configs/default";

import React, { useEffect, useState, useRef } from "react";

function InputPane({ sketchLabel, view, drawnGeometry }) {
  const [topCrops, setTopCrops] = useState(null);
  const [health, setHealth] = useState(null);
  const [acres, setAcres] = useState(null);

  /**
   * onSketchResultGraphic - handle the drawn graphic
   * @param {Graphic} graphic the drawn Graphic
   */
  const onSketchResultGraphic = (graphic) => {
    runAnalysis(graphic);
  };

  /**
   * Run the analysis
   * @param {Graphic} graphic
   */
  const runAnalysis = async (graphic) => {
    let soilInfo = await getSoils(graphic.geometry, apiKey);
    console.log("soilInfo", soilInfo);
    // setTopCrops(soilInfo.top_crops);

    // TODO: do same as above for getHealth (setHealth)
    // TODO: do same as above for getAcreage (setAcres)
  };

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
      <EsriSketch
        label={sketchLabel}
        view={view}
        onSketchResultGraphic={onSketchResultGraphic}
      ></EsriSketch>

      <AnalysisResult
        topCrops={topCrops}
        health={health}
        acres={acres}
      ></AnalysisResult>
    </div>
  );
}

export default InputPane;
