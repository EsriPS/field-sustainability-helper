import React, { useRef } from "react";
import { strings } from "../configs/default";
import { CalciteButton } from "@esri/calcite-components-react";

const inputStyle = {
  marginTop: "8px",
};

function UserForm({ formSubmitted }) {
  const tillInput = useRef(null);
  const plantInput = useRef(null);
  const rotateInput = useRef(null);
  const irrigatedInput = useRef(null);

  const submit = (evt) => {
    formSubmitted({
      tilled: tillInput.current.checked,
      plantedCover: plantInput.current.checked,
      rotated: rotateInput.current.checked,
      irrigated: irrigatedInput.current.checked,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      <label style={inputStyle}>
        {strings.tillInput}
        <input
          ref={tillInput}
          type="checkbox"
          style={{ float: "right" }}
        ></input>
      </label>
      <label style={inputStyle}>
        {strings.plantInput}
        <input
          ref={plantInput}
          type="checkbox"
          style={{ float: "right" }}
        ></input>
      </label>
      <label style={inputStyle}>
        {strings.rotateInput}
        <input
          ref={rotateInput}
          type="checkbox"
          style={{ float: "right" }}
        ></input>
      </label>
      <label style={inputStyle}>
        {strings.irrigatedInput}
        <input
          ref={irrigatedInput}
          type="checkbox"
          style={{ float: "right" }}
        ></input>
      </label>
      <CalciteButton style={inputStyle} onClick={submit}>
        {strings.submitButton}
      </CalciteButton>
    </div>
  );
}

export default UserForm;
