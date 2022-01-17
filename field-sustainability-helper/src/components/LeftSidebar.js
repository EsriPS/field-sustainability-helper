import {
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalcitePanel,
} from "@esri/calcite-components-react";
import SustainabilityPanel from "./SustainabilityPanel";
import BasemapGalleryWrapper from "./BasemapGalleryWrapper";

import React, { useState, useRef } from "react";

function LeftSidebar({ sketchLabel, view }) {
  const fieldAnalysisPanel = useRef();
  const basemapsPanel = useRef();
  const aboutPanel = useRef();

  const showPanel = (panel) => {
    const alreadyActive = panel.current.active;

    [fieldAnalysisPanel, basemapsPanel, aboutPanel].forEach((p) => {
      p.current.hidden = true;
      p.current.active = false;
    });

    if (!alreadyActive) {
      panel.current.hidden = false;
      panel.current.active = true;
    }
  };

  return (
    <CalciteShellPanel
      slot="primary-panel"
      style={{ display: "flex" }}
      widthScale="l"
    >
      <CalciteActionBar slot="action-bar">
        <CalciteAction
          icon="layers"
          text="FieldAnalysis"
          onClick={() => {
            showPanel(fieldAnalysisPanel);
          }}
        ></CalciteAction>
        <CalciteAction
          icon="basemap"
          text="Basemaps"
          onClick={() => {
            showPanel(basemapsPanel);
          }}
        ></CalciteAction>
        <CalciteAction
          icon="information"
          text="Information"
          onClick={() => {
            showPanel(aboutPanel);
          }}
        ></CalciteAction>
      </CalciteActionBar>

      <CalcitePanel
        heading="Field Analysis"
        width-scale="l"
        ref={fieldAnalysisPanel}
      >
        <SustainabilityPanel
          sketchLabel={sketchLabel}
          view={view}
        ></SustainabilityPanel>
      </CalcitePanel>
      <CalcitePanel
        heading="Basemaps"
        height-scale="l"
        width-scale="m"
        hidden
        ref={basemapsPanel}
      >
        <BasemapGalleryWrapper view={view}></BasemapGalleryWrapper>
      </CalcitePanel>

      <CalcitePanel heading="About" width-scale="m" hidden ref={aboutPanel}>
        <p style={{ padding: "0.75rem" }}>
          Field Sustainability Helper is a web tool to help analyze agricultural
          holdings for sustainable practices.
        </p>
      </CalcitePanel>
    </CalciteShellPanel>
  );
}

export default LeftSidebar;
