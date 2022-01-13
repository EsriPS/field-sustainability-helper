// import React, { useEffect, useState, useRef } from "react";

function AnalysisResult({ topCrops, health, acres }) {
  return (
    topCrops &&
    health &&
    acres && (
      <div>
        <p>
          <strong>Top crops:</strong>
        </p>
        <ul>
          {topCrops &&
            topCrops.length > 0 &&
            topCrops.map((cropName, index) => {
              return <li key={index}>{cropName}</li>;
            })}
        </ul>
        <p>
          <strong>Soil health:</strong> {health}
        </p>
        <p>
          <strong>Area:</strong> {acres} acres
        </p>
      </div>
    )
  );
}

export default AnalysisResult;
