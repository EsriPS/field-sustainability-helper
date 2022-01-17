import { strings } from "../configs/default";
import React, { useEffect, useState } from "react";
import { CalciteButton, CalciteProgress } from "@esri/calcite-components-react";
import Gauge from "react-gaugejs";

function SustainabilityScore({
  cancelClicked,
  userInputs,
  soilHealth,
  erosion,
}) {
  const [sustainabilityScore, setSustainabilityScore] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const cancel = (evt) => {
    cancelClicked();
  };

  const soilHealthLookup = {
    GREAT: 2,
    GOOD: 1,
    OKAY: 0,
    BAD: -1,
  };

  const erosionLookup = {
    1: 2,
    2: 1,
    3: -1,
    4: -2,
  };

  useEffect(() => {
    if (userInputs && soilHealth && erosion) {
      const recos = [];
      let susScore = 0;

      if (userInputs.tilled) {
        susScore -= 1;
        recos.push("Use no-till technologies");
      }
      if (userInputs.plantedCover) {
        susScore += 1;
      } else {
        recos.push("Plant cover crops");
      }
      if (userInputs.rotated) {
        susScore += 1;
      } else {
        recos.push("Rotate crops");
      }
      if (userInputs.irrigated) {
        susScore += 1;
      }

      susScore += soilHealthLookup[soilHealth];
      if (soilHealthLookup[soilHealth] < 1) {
        recos.push("Improve soil health through natural fertilization.");
      }

      susScore += erosionLookup[erosion];
      if (erosionLookup[erosion] < 2) {
        recos.push("Focus on erosion control.");
      }

      // Our calculation can yeild min -4 through 7 ...  so start add 4 so our scale is now 0 (min) through 11
      susScore += 4;
      // normalize (max of 11)
      susScore = susScore / 11;
      // multiply by 10 to give a 0-10 score:
      susScore = susScore * 10;

      setSustainabilityScore(susScore);
      setRecommendations(recos);
    }
  }, [userInputs, soilHealth, erosion]);

  return (
    userInputs &&
    soilHealth &&
    erosion &&
    sustainabilityScore && (
      <div style={{ padding: "10px" }}>
        <div style={{ fontSize: "25px", textAlign: "center" }}>
          {strings.sustainabilityScoreLabel}
          {sustainabilityScore && sustainabilityScore.toFixed(1)}/10
          {/* <CalciteProgress
            value={sustainabilityScore / 10}
            color="red"
          ></CalciteProgress> */}
          <Gauge
            value={sustainabilityScore}
            minValue={0}
            maxValue={10}
            animationSpeed={32}
            options={{
              staticZones: [
                { strokeStyle: "#F03E3E", min: 0, max: 3 },
                { strokeStyle: "#FFDD00", min: 3, max: 6 },
                { strokeStyle: "#30B32D", min: 6, max: 10 },
              ],
              pointer: {
                length: 0.6,
              },
              angle: 0,
            }}
          />
        </div>
        {recommendations && recommendations.length > 0 && (
          <>
            <h3>Sustainability Recommendations</h3>
            <ul>
              {recommendations.map((reco, i) => {
                return <li key={i}>{reco}</li>;
              })}{" "}
            </ul>
          </>
        )}

        <div style={{ textAlign: "right" }}>
          <CalciteButton
            style={{ marginTop: "8px" }}
            onClick={cancel}
            color="neutral"
          >
            {strings.back}
          </CalciteButton>
        </div>
      </div>
    )
  );
}

export default SustainabilityScore;
