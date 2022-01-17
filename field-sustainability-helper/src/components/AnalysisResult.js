import React, { useRef, useEffect } from "react";
import { strings } from "../configs/default";

function AnalysisResult({
  topSoils,
  soilHealth,
  acres,
  slope,
  topCrops,
  erosionClass,
  currentHealth,
  health5YearData,
}) {
  const health5YearCanvas = useRef(null);

  useEffect(() => {
    if (health5YearData && health5YearCanvas.current) {
      // TODO: Maybe revive this when we have time
      // console.log(health5YearData);
      // const width = health5YearData.params.width;
      // const height = health5YearData.params.height;
      // const ctx = health5YearCanvas.current.getContext("2d");
      // const imageData = ctx.createImageData(width, height);
      // console.log(imageData);
      // for (let i = 0; i <= imageData.data.length; i += 3) {
      //   imageData.data[i + 0] =
      //     health5YearData.pixelData.pixelBlock.pixels[0][i];
      //   imageData.data[i + 1] =
      //     health5YearData.pixelData.pixelBlock.pixels[1][i];
      //   imageData.data[i + 2] =
      //     health5YearData.pixelData.pixelBlock.pixels[2][i];
      // }
      // imageData.data = health5YearData.pixelData;
      // ctx.putImageData(imageData, width * 2, height * 2);
    }
  }, [health5YearData]);

  const cardStyle = {
    border: "1px solid gray",
    textAlign: "center",
    padding: "5px",
  };

  const largerFontSize = {
    fontSize: "25px",
  };

  let healthDot = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    display: "inline-block",
    marginTop: "5px",
  };

  if (soilHealth === "GREAT") {
    healthDot.backgroundColor = "green";
  } else if (soilHealth === "GOOD") {
    healthDot.backgroundColor = "yellow";
  } else if (soilHealth === "OKAY") {
    healthDot.backgroundColor = "orange";
  } else if (soilHealth === "BAD") {
    healthDot.backgroundColor = "red";
  }

  return (
    topSoils &&
    soilHealth &&
    acres &&
    slope &&
    topCrops && (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            margin: "1rem",
            border: "1px solid gray",
          }}
        >
          <div style={cardStyle}>
            <div style={largerFontSize}>{acres.toFixed(1)}</div>
            <h5>{strings.acres}</h5>
          </div>
          <div style={cardStyle}>
            {topSoils &&
              topSoils.length > 0 &&
              topSoils.map((soilName, index) => {
                return (
                  <p key={index} style={{ fontSize: "small" }}>
                    {soilName}
                  </p>
                );
              })}
            <h5>{strings.soilType}</h5>
          </div>
          <div style={cardStyle}>
            <span style={healthDot}></span>
            <h5>{strings.soilHealth}</h5>
          </div>
          <div style={cardStyle}>
            {topCrops &&
              topCrops.length > 0 &&
              topCrops.map((cropName, index) => {
                return <p key={index}>{cropName}</p>;
              })}
            <h5>{strings.crops20}</h5>
          </div>
          <div style={cardStyle}>
            <div style={largerFontSize}>{slope.toFixed(1)}</div>
            <h5>{strings.slope}</h5>
          </div>
          <div style={cardStyle}>
            <div style={largerFontSize}>{currentHealth.toFixed(2)}</div>
            <h5>{strings.health19}</h5>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: "20px" }}>
              {erosionClass.replaceAll("In this map unit, ", "")}
            </div>
            <h5>{strings.erosionClass}</h5>
          </div>
          <div style={cardStyle}>
            {/* <canvas ref={health5YearCanvas}></canvas>
            <h5>{strings.health5Year}</h5> */}
          </div>
        </div>
      </div>
    )
  );
}

export default AnalysisResult;
