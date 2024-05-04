import "./styles.css";
import React from "react";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import {
  ReactPhotoSphereViewer,
  LensflarePlugin,
} from "react-photo-sphere-viewer";
import "@photo-sphere-viewer/markers-plugin/index.css";
// added comment

function App() {
  const photoSphereRef = React.useRef();

  const handleReady = (instance) => {
    const markersPlugs = instance.getPlugin(MarkersPlugin);
    if (!markersPlugs) return;
    console.log(markersPlugs);
    markersPlugs.addEventListener("select-marker", () => {
      console.log("asd");
    });
  };

  const plugins = [
    [
      MarkersPlugin,
      {
        // list of markers

      },
    ],
    [
      LensflarePlugin,
      {
        // list of lensflares
      },
    ],
  ];

  return (
    <div className="App">
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        src="test4.png"
        littlePlanet={true}
        lang={{
          littlePlanetButton: "Little Planet",
        }}
        hideNavbarButton={true}
        height={"100vh"}
        width={"100vw"}
        onReady={handleReady}
        plugins={plugins}
      />
    </div>
  );
}

export default App;
