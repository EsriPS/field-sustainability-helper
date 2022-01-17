import React, { useEffect, useRef } from "react";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

export default function BasemapGalleryWrapper({ view }) {
  let widgetRef = useRef();

  useEffect(() => {
    if (view) {
      new BasemapGallery({
        view: view,
        container: widgetRef.current,
      });
    }
  }, [view]);

  return (
    <div>
      <div ref={widgetRef}></div>
    </div>
  );
}
