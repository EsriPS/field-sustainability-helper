import React, { useRef } from "react";

import { strings } from "../configs/default";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={inputStyle}>
        {strings.tillInput}
        <input ref={tillInput} type="checkbox"></input>
      </label>
      <label style={inputStyle}>
        {strings.plantInput}
        <input ref={plantInput} type="checkbox"></input>
      </label>
      <label style={inputStyle}>
        {strings.rotateInput}
        <input ref={rotateInput} type="checkbox"></input>
      </label>
      <label style={inputStyle}>
        {strings.irrigatedInput}
        <input ref={irrigatedInput} type="checkbox"></input>
      </label>
      <button style={inputStyle} onClick={submit}>
        {strings.submitButton}
      </button>
    </div>
  );
}

export default UserForm;
