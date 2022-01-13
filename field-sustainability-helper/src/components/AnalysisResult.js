// import React, { useEffect, useState, useRef } from "react";

function AnalysisResult({ topCrops, health, acres }) {
  return (
    <div>
      <p>{topCrops}</p>
      <p>{health}</p>
      <p>{acres}</p>
    </div>
  );
}

export default AnalysisResult;
