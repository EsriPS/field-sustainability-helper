import EsriSketch from "../components/EsriSketch";

function InputPane({ sketchLabel, view }) {

  return (
    <div
      style={{
        height: "calc(100vh - 60px)",
        width: "450px",
        borderRight: "solid",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EsriSketch label={sketchLabel} view={view}></EsriSketch>
    </div>
  );
}

export default InputPane;
