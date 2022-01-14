import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";
import catLoading from "../images/cat-loading.gif";

import {
  getSoils,
  getHealth,
  getAcreage,
  getCropsStatisticsHistograms,
  getNaipStatisticsHistograms,
  getElevationStatisticsHistograms,
  getErosionStatisticsHistograms,
} from "../utils/AOIUtils";
import { apiKey } from "../configs/default";

import React, { useEffect, useState, useRef } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

function LeftSidebar({ sketchLabel, view, drawnGeometry }) {
  const [topCrops, setTopCrops] = useState(null);
  const [health, setHealth] = useState(null);
  const [acres, setAcres] = useState(null);
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

    let soilInfo = await getSoils(graphic.geometry, apiKey);
    _resultGraphicsLayer.addMany(soilInfo.all_results);
    setTopCrops(soilInfo.top_crops);

    let healthInfo = await getHealth(graphic.geometry, view, apiKey);
    setHealth(healthInfo);

    const totalAcres = await getAcreage(graphic.geometry, apiKey);
    setAcres(totalAcres);

    // const cropStats = await getCropsStatisticsHistograms(
    //   graphic.geometry,
    //   view,
    //   apiKey
    // );
    // console.log(cropStats);

    // const erosionStats = await getErosionStatisticsHistograms(
    //   graphic.geometry,
    //   view,
    //   apiKey
    // );
    // console.log(erosionStats);

    // const naipStats = await getNaipStatisticsHistograms(
    //   graphic.geometry,
    //   view,
    //   apiKey
    // );
    // console.log(naipStats);

    // const elevationStats = await getElevationStatisticsHistograms(
    //   graphic.geometry,
    //   view,
    //   apiKey
    // );
    // console.log(elevationStats);

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
            topCrops={topCrops}
            health={health}
            acres={acres}
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
