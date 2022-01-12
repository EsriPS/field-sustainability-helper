import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import { strings, items } from "./configs/default";
import Header from "./components/Header";
import EsriMap from "./components/EsriMap";

function App() {
  return (
    <div className="App">
      <Header
        color="white"
        backgroundColor="#212121"
        title={strings.title}
      ></Header>
      <EsriMap webMapId={items.webMap}></EsriMap>
    </div>
  );
}

export default App;
