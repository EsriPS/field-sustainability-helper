import { strings } from "../configs/default";
import React, { useEffect, useState } from "react";

function SustainabilityScore({
  cancelClicked,
  userInputs,
  soilHealth,
  erosion
}) {
  const [sustainabilityScore, setSustainabilityScore] = useState(null);

  const cancel = (evt) => {
    cancelClicked();
  };

  const soilHealthLookup = {
    "GREAT": 2,
    "GOOD": 1,
    "OKAY": 0,
    "BAD": -1
  };

  const erosionLookup = {
    1: 2,
    2: 1,
    3: -1,
    4: -2
  };

  useEffect(() => {
    if (userInputs && soilHealth && erosion) {

      let susScore = 0;

      if (userInputs.tilled) {
        susScore -= 1;
      }
      if (userInputs.plantedCover) {
        susScore += 1;
      }
      if (userInputs.rotated) {
        susScore += 1;
      }
      if (userInputs.irrigated) {
        susScore += 1;
      }

      susScore += soilHealthLookup[soilHealth];
      susScore += erosionLookup[erosion];

      setSustainabilityScore(susScore)
    }
  }, [userInputs, soilHealth, erosion]);


  return (
    userInputs &&
    soilHealth &&
    erosion && (
      <div>
        <div style={{fontSize: "25px"}}>
        {strings.sustainabilityScoreLabel}{sustainabilityScore}
        </div>
        <button style={{marginTop: "8px"}} onClick={cancel}>
          {strings.cancel}
        </button>
      </div>
    )
  );
}

export default SustainabilityScore;
