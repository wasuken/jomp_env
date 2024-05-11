"use client";
import Map, { Marker } from "react-map-gl/maplibre";
import { FaMapMarkerAlt } from "react-icons/fa";
import "maplibre-gl/dist/maplibre-gl.css";

interface JournyPoint {
  lat: number;
  lon: number;
  summary: string;
}

export default function Home() {
  const onClick = (e) => {
    console.log(e.lngLat);
  };
  return (
    <Map
      initialViewState={{
        longitude: 132.421,
        latitude: 34.368,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      onClick={onClick}
      mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
    >
      <Marker longitude={132.421} latitude={34.368}>
        <FaMapMarkerAlt />
      </Marker>
    </Map>
  );
}
