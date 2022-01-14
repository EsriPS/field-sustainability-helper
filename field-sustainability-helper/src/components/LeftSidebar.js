import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";
import catLoading from "../images/cat-loading.gif";

import {
  getSoils,
  getHealth,
  getAcreage,
  getAvgSlope,
  getErosionClass,
  getCrops,
} from "../utils/AOIUtils";
import { apiKey } from "../configs/default";

import React, { useState } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

function LeftSidebar({ sketchLabel, view, drawnGeometry }) {
  const [topSoils, setTopSoils] = useState(null);
  const [health, setHealth] = useState(null);
  const [acres, setAcres] = useState(null);
  const [slope, setSlope] = useState(null);
  const [topCrops, setTopCrops] = useState(null);
  const [erosionClass, setErosionClass] = useState(null);
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

    const avgSlope = await getAvgSlope(graphic.geometry, view, apiKey);
    setSlope(avgSlope);

    const erosionClass = await getErosionClass(graphic.geometry, view, apiKey);
    setErosionClass(erosionClass);

    const crops = await getCrops(graphic.geometry, view, 2020, apiKey);
    setTopCrops(crops.topCrops);

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
            topCrops={topCrops}
            erosionClass={erosionClass}
          ></AnalysisResult>
        </>
      );
    }
  };

  return (
    <div
      style={{
        overflow: "auto",
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
