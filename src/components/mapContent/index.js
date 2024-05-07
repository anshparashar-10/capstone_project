import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerData from "./locations.json";

const MapContent = ({ mapWidth, mapPosition }) => {
  const center = [20.5937, 78.9629]; // Center coordinates of India

  const customMarkerIcon = new L.Icon({
    iconUrl: "svgs/LOCATION_POINTER1.png",
    iconSize: [32, 32], // Adjust the size of the icon
    iconAnchor: [16, 32], // Adjust the position of the icon relative to its center
  });

  // const marker = {
  //   position: [-9.7963, 159.596],
  //   popupContent: "Marker Content Here", // You can put any content you want to display in the popup
  // };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        // left: "4.7%",
        left: mapPosition,
        bottom: 0,
        // width: "72%",
        width: "100%",
        height: "100%",
        transition: "left  0.3s ease-in-out",
      }}
    >
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Map over markerData and create a Marker for each item */}
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={customMarkerIcon}
          >
            <Popup>{`Marker ${index + 1} Content Here`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapContent;
