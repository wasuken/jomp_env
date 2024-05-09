"use client";
import Map from "react-map-gl/maplibre";

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
    />
  );
}
