import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../utils/util";
import "./Map.css";
import 'leaflet/dist/leaflet.css';

function Map({ countries, casesType, center, zoom }) {
	return (
		<div className="map-container">
      <MapContainer
        center={center}
        zoom={zoom}
        doubleClickZoom={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
	);
}

export default Map;