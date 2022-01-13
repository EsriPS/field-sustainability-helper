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
    setTopCrops(soilInfo.top_crops);

    let healthInfo = await getHealth(graphic.geometry, apiKey);
    setHealth(healthInfo);

    const totalAcres = await getAcreage(graphic.geometry, apiKey);
    setAcres(totalAcres);
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
