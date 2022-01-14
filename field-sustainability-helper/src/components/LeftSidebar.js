import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";
import catLoading from "../images/cat-loading.gif";

import {
  getSoils,
  getSoilHealth,
  getAcreage,
  getAvgSlope,
  getErosionClass,
  getCrops,
  getAvgNdvi,
  clipAndGetCrops,
  clipAndGetNdvi,
  clipAndGetSsurgo,
  clipAndGetElevation,
  clipAndGetErosion,
} from "../utils/AOIUtils";
import { apiKey } from "../configs/default";

import React, { useState } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

function LeftSidebar({ sketchLabel, view, drawnGeometry }) {
  const [topSoils, setTopSoils] = useState(null);
  const [soilHealth, setSoilHealth] = useState(null);
  const [acres, setAcres] = useState(null);
  const [slope, setSlope] = useState(null);
  const [topCrops, setTopCrops] = useState(null);
  const [erosionClass, setErosionClass] = useState(null);
  const [currentHealth, setCurrentHealth] = useState(null);
  const [resultGraphicsLayer, setResultGraphicsLayer] = useState(null);
  const [croppedImageLayers, setCroppedImageLayers] = useState({});
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

    const newImageLayers = [
      clipAndGetCrops(graphic.geometry, apiKey),
      clipAndGetElevation(graphic.geometry, apiKey),
      clipAndGetErosion(graphic.geometry, apiKey),
      clipAndGetNdvi(graphic.geometry, apiKey),
      clipAndGetSsurgo(graphic.geometry, apiKey),
    ];
    let newCroppedImageLayers = {};
    for (const ind in newImageLayers) {
      const newImageLayer = newImageLayers[ind];
      const title = newImageLayer.title;
      if (croppedImageLayers.hasOwnProperty(title))
        view.map.remove(croppedImageLayers[title]);

      newCroppedImageLayers[title] = newImageLayer;
      view.map.add(newImageLayer);
    }
    setCroppedImageLayers(newCroppedImageLayers);

    _resultGraphicsLayer.removeAll();

    const soilInfo = await getSoils(graphic.geometry, apiKey);
    _resultGraphicsLayer.addMany(soilInfo.allResults);
    setTopSoils(soilInfo.topSoils);

    const healthInfo = await getSoilHealth(graphic.geometry, view, apiKey);
    setSoilHealth(healthInfo);

    const totalAcres = await getAcreage(graphic.geometry, apiKey);
    setAcres(totalAcres);

    const avgSlope = await getAvgSlope(graphic.geometry, view, apiKey);
    setSlope(avgSlope);

    const erosionInfo = await getErosionClass(graphic.geometry, view, apiKey);
    const erosionClass = erosionInfo.description;
    setErosionClass(erosionClass);

    const crops = await getCrops(graphic.geometry, view, 2020, apiKey);
    setTopCrops(crops.topCrops);

    const avgNdvi = await getAvgNdvi(graphic.geometry, view, 2019, apiKey);
    setCurrentHealth(avgNdvi);

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
            soilHealth={soilHealth}
            acres={acres}
            slope={slope}
            topCrops={topCrops}
            erosionClass={erosionClass}
            currentHealth={currentHealth}
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
