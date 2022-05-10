import MapView from "./components/MapView";
import {MapProvider} from "react-map-gl";

function App() {
  return (
    <>
     <MapProvider>
      <MapView />
    </MapProvider>
    </>
  );
}

export default App;
