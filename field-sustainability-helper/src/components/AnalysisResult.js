import { strings } from "../configs/default";

function AnalysisResult({
  topSoils,
  health,
  acres,
  slope,
  topCrops,
  erosionClass,
}) {
  const cardStyle = {
    border: "1px solid gray",
    textAlign: "center",
    padding: "10px",
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
    topSoils &&
    health &&
    acres &&
    slope &&
    topCrops && (
      <div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            marginTop: "5vh",
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
                return (
                  <p key={index} style={largerFontSize}>
                    {cropName}
                  </p>
                );
              })}
            <h5>{strings.crops20}</h5>
          </div>
          <div style={cardStyle}>
            <div style={largerFontSize}>{slope.toFixed(1)}</div>
            <h5>{strings.slope}</h5>
          </div>
          <div style={cardStyle}>
            <h5>{strings.health21}</h5>
          </div>
          <div style={cardStyle}>
            <div style={largerFontSize}>{erosionClass}</div>
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
