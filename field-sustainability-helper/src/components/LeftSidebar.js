import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";
import catLoading from "../images/cat-loading.gif";

import {
  getSoils,
  getHealth,
  getAcreage,
  getAvgSlope,
  getAvgErosion,
  getCrops,
} from "../utils/AOIUtils";
import { apiKey } from "../configs/default";

import React, { useEffect, useState, useRef } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

function LeftSidebar({ sketchLabel, view, drawnGeometry }) {
  const [topSoils, setTopSoils] = useState(null);
  const [health, setHealth] = useState(null);
  const [acres, setAcres] = useState(null);
  const [slope, setSlope] = useState(null);
  const [resultGraphicsLayer, setResultGraphicsLayer] = useState(null);
  const [busy, setBusy] = useState(false);

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
    setBusy(true);

    let _resultGraphicsLayer = resultGraphicsLayer;
    if (!_resultGraphicsLayer) {
      _resultGraphicsLayer = new GraphicsLayer();
      view.map.add(_resultGraphicsLayer);
      setResultGraphicsLayer(_resultGraphicsLayer);
    }

    _resultGraphicsLayer.removeAll();

    const soilInfo = await getSoils(graphic.geometry, apiKey);
    _resultGraphicsLayer.addMany(soilInfo.allResults);
    setTopSoils(soilInfo.topSoils);

    const healthInfo = await getHealth(graphic.geometry, view, apiKey);
    setHealth(healthInfo);

    const totalAcres = await getAcreage(graphic.geometry, apiKey);
    setAcres(totalAcres);

    // slope
    const avgSlope = await getAvgSlope(graphic.geometry, view, apiKey);
    setSlope(avgSlope);

    // erosion class
    const avgErosion = await getAvgErosion(graphic.geometry, view, apiKey);

    const crops = await getCrops(graphic.geometry, view, 2020, apiKey);
    console.log(crops);

    setBusy(false);
  };

  const renderLeftSidebar = () => {
    if (busy) {
      return <img alt="loading..." src={catLoading} width="400"></img>;
    } else {
      return (
        <>
          <EsriSketch
            label={sketchLabel}
            view={view}
            onSketchResultGraphic={onSketchResultGraphic}
          ></EsriSketch>

          <AnalysisResult
            topSoils={topSoils}
            health={health}
            acres={acres}
            slope={slope}
          ></AnalysisResult>
        </>
      );
    }
  };

  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        width: "450px",
        borderRight: "solid",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      {renderLeftSidebar()}
    </div>
  );
}

export default LeftSidebar;
