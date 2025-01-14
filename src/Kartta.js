import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "index.css";

const Kartta = () => {
  const position = [60.1699, 24.9384]; // Esimerkkinä Helsingin koordinaatit

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2>Kartta</h2>
      <MapContainer center={position} zoom={13} style={{ height: "90%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Tämä on Helsinki.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Kartta;
