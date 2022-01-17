import EsriSketch from "./EsriSketch";
import AnalysisResult from "./AnalysisResult";
import UserForm from "./UserForm";
import SustainabilityScore from "./SustainabilityScore";
import catLoading from "../images/cat-loading.gif";
import { CalcitePanel, CalciteButton } from "@esri/calcite-components-react";
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
  fetchNdviYearImages,
} from "../utils/AOIUtils";
import { apiKey, strings } from "../configs/default";

import React, { useState } from "react";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

function LeftSidebar({ sketchLabel, view, drawnGeometry }) {
  const [topSoils, setTopSoils] = useState(null);
  const [soilHealth, setSoilHealth] = useState(null);
  const [acres, setAcres] = useState(null);
  const [slope, setSlope] = useState(null);
  const [topCrops, setTopCrops] = useState(null);
  const [erosionClass, setErosionClass] = useState(null);
  const [erosionClassVal, setErosionClassVal] = useState(null);
  const [currentHealth, setCurrentHealth] = useState(null);
  const [resultGraphicsLayer, setResultGraphicsLayer] = useState(null);
  const [croppedImageLayers, setCroppedImageLayers] = useState({});
  const [health5YearData, setHealth5YearData] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSustainabilityScore, setShowSustainabilityScore] = useState(false);
  const [formData, setFormData] = useState(null);
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
      _resultGraphicsLayer = new GraphicsLayer({ title: "Soils" });
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
    setErosionClassVal(erosionInfo.class);

    const crops = await getCrops(graphic.geometry, view, 2020, apiKey);
    setTopCrops(crops.topCrops);

    const avgNdvi = await getAvgNdvi(graphic.geometry, view, 2019, apiKey);
    setCurrentHealth(avgNdvi);

    const images = await fetchNdviYearImages(
      2015,
      2019,
      graphic.geometry,
      apiKey
    );
    if (images.length > 0) setHealth5YearData(images[0]);

    setBusy(false);
  };

  const renderSustainabilityScore = () => {
    if (showSustainabilityScore) {
      return (
        <SustainabilityScore
          cancelClicked={() => {
            setShowSustainabilityScore(false);
          }}
          userInputs={formData}
          soilHealth={soilHealth}
          erosion={erosionClassVal}
        ></SustainabilityScore>
      );
    }
  };

  const renderUserForm = () => {
    if (showUserForm) {
      return (
        <UserForm
          formSubmitted={(formData) => {
            setFormData(formData);
            setShowUserForm(false);
            setShowSustainabilityScore(true);
          }}
        ></UserForm>
      );
    } else return "";
  };

  const renderLeftSidebar = () => {
    const haveData =
      topSoils &&
      soilHealth &&
      acres &&
      slope &&
      topCrops &&
      erosionClass &&
      currentHealth !== null;
    //  && health5YearData;

    // debug:
    // console.log("topSoils", topSoils);
    // console.log("soilHealth", soilHealth);
    // console.log("acres", acres);
    // console.log("slope", slope);
    // console.log("topCrops", topCrops);
    // console.log("erosionClass", erosionClass);
    // console.log("currentHealth", currentHealth);
    // console.log("haveData", haveData);

    if (busy) {
      return <img alt="loading..." src={catLoading}></img>;
    } else if (!showUserForm && !showSustainabilityScore) {
      return (
        <>
          <p style={{ paddingLeft: "1rem" }}>First, draw a field boundary.</p>
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
            health5YearData={health5YearData}
          ></AnalysisResult>

          <CalciteButton
            style={{
              display: haveData && !busy ? "" : "none",
              marginTop: "8px",
            }}
            onClick={() => {
              setShowUserForm(true);
            }}
          >
            {strings.sustainabilityButton}
          </CalciteButton>
        </>
      );
    } else return "";
  };

  return (
    <CalcitePanel style={{}}>
      {renderLeftSidebar()}
      {renderUserForm()}
      {renderSustainabilityScore()}
    </CalcitePanel>
  );
}

export default LeftSidebar;
