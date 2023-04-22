import "./App.css";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";
import HeroSection from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col gap-6" style={{ height: "100%" }}>
      <HeroSection />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: -6.836825,
            latitude: 33.971588,
            zoom: 12,
          }}
          renderChildren={false}
          style={{ width: "70%", height: "30rem" }}
          mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_API_KEY}`}
        />
      </section>

      <section className="mt-5">
        <Footer />
      </section>
    </div>
  );
}

export default App;
