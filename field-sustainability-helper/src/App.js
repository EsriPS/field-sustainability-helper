import "./App.css";
import "@arcgis/core/assets/esri/themes/light/main.css";
import Header from "./components/Header";
import EsriMap from "./components/EsriMap";

function App() {
  return (
    <div className="App">
      <Header
        color="white"
        backgroundColor="#212121"
        title="FiSH (Field Sustainability Helper)"
      ></Header>
      <EsriMap webMapId={"e691172598f04ea8881cd2a4adaa45ba"}></EsriMap>
    </div>
  );
}

export default App;
