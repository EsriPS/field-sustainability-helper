import { strings } from "../configs/default";

function AnalysisResult({ topCrops, health, acres, slope }) {
  const cardStyle = {
    border: "1px solid",
    textAlign: "center",
  };

  let healthDot = {
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    display: "inline-block",
    marginTop: "5px",
  };

  if (health === "GREAT") {
    healthDot.backgroundColor = "green";
  } else if (health === "GOOD") {
    healthDot.backgroundColor = "yellow";
  } else if (health === "OKAY") {
    healthDot.backgroundColor = "orange";
  } else if (health === "BAD") {
    healthDot.backgroundColor = "red";
  }

  return (
    topCrops &&
    health &&
    acres && (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            marginTop: "5vh",
          }}
        >
          <div style={cardStyle}>
            {acres.toFixed(1)}
            <h5>{strings.acres}</h5>
          </div>
          <div style={cardStyle}>
            {topCrops &&
              topCrops.length > 0 &&
              topCrops.map((cropName, index) => {
                return <p key={index}>{cropName}</p>;
              })}
            <h5>{strings.soilType}</h5>
          </div>
          <div style={cardStyle}>
            <span style={healthDot}></span>
            <h5>{strings.soilHealth}</h5>
          </div>
          <div style={cardStyle}>
            <h5>{strings.crop21}</h5>
          </div>
          <div style={cardStyle}>
            {slope.toFixed(1)}
            <h5>{strings.slope}</h5>
          </div>
          <div style={cardStyle}>
            <h5>{strings.health21}</h5>
          </div>
          <div style={cardStyle}>
            <h5>{strings.erosionClass}</h5>
          </div>
          <div style={cardStyle}>
            <h5>{strings.health5Year}</h5>
          </div>
        </div>
      </div>
    )
  );
}

export default AnalysisResult;
