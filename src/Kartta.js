import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Kartta = () => {
  // Joensuun keskustan koordinaatit
  const joensuuPosition = [62.601, 29.763]; // Joensuun sijainti
  const kylpylaPosition = [62.6122, 29.7601]; // Esimerkki: kylpylän sijainti Joensuussa

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2>Kartta</h2>
      <MapContainer center={joensuuPosition} zoom={13} style={{ height: "90%", width: "100%" }}>
        {/* OpenStreetMapin taustakartta */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker kylpylän kohdalla */}
        <Marker position={kylpylaPosition}>
          <Popup>
            Tämä on kylpylä Joensuussa!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Kartta;
