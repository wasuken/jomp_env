"use client";
import { useState, useRef, useMemo, useCallback } from "react";
import Map, { Marker, MapEvent, Popup } from "react-map-gl/maplibre";
import { FaMapMarkerAlt } from "react-icons/fa";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

interface JournyPoint {
  lat: number;
  lon: number;
  summary: string;
}

const journyList = [
  {
    id: 1,
    lon: 132.4526454064214,
    lat: 34.391625286814474,
    summary: `
広島市には、スポーツのプロチームや企業チーム、クラブチームが多くあり、市民は様々なスポーツを楽しんでいます。
文化芸術面では、プロオーケストラである広島交響楽団が演奏を通じて世界に平和のメッセージを発信しています。また、市街地には広島市現代美術館など３つの美術館が集まっており、市民に楽しさや感動をもたらしています。
`,
  },
  {
    id: 2,
    lon: 132.456543,
    lat: 34.400123,
    summary: `
広島市は、日本国内でも有数の観光地として知られています。原爆ドームや平和記念公園は、世界平和を象徴する重要な場所です。
`,
  },
  {
    id: 3,
    lon: 132.457123,
    lat: 34.395234,
    summary: `
広島市には多くのショッピングエリアがあり、地元の特産品やグルメを楽しむことができます。特に、広島風お好み焼きは人気です。
`,
  },
  {
    id: 4,
    lon: 132.460456,
    lat: 34.402345,
    summary: `
広島市の中心部には、広島城があります。広島城は歴史的な観光スポットで、周辺には美しい公園が広がっています。
`,
  },
  {
    id: 5,
    lon: 132.461789,
    lat: 34.410567,
    summary: `
広島市の近くには宮島があります。宮島は、日本三景の一つであり、美しい景色と神社で有名です。
`,
  },
  {
    id: 6,
    lon: 132.462345,
    lat: 34.415678,
    summary: `
広島市は自然が豊かで、市内には多くの公園や緑地が点在しています。四季折々の風景を楽しむことができます。
`,
  },
  {
    id: 7,
    lon: 132.463456,
    lat: 34.420789,
    summary: `
広島市は教育機関も充実しており、多くの大学や研究機関が立地しています。学生や研究者が集まる都市でもあります。
`,
  },
  {
    id: 8,
    lon: 132.464567,
    lat: 34.42589,
    summary: `
広島市は交通の便も良く、JRや路面電車、市内バスが便利です。観光やビジネスで訪れる人々にとっても移動が容易です。
`,
  },
  {
    id: 9,
    lon: 132.465678,
    lat: 34.430901,
    summary: `
広島市はスポーツも盛んで、マツダスタジアムではプロ野球チームの試合が開催されます。スポーツ観戦も楽しめる都市です。
`,
  },
  {
    id: 10,
    lon: 132.466789,
    lat: 34.435012,
    summary: `
広島市の郊外には温泉地もあり、リラックスできる場所が多数あります。日帰り温泉や宿泊施設が充実しています。
`,
  },
];

export default function Home() {
  const [popupInfo, setPopupInfo] = useState<JournyPoint | undefined>(
    undefined
  );
  const markerRefs = useRef({});

  const handleMarkerClick = useCallback((id) => {
    const marker = markerRefs.current[id];
    if (marker) {
      const popup = new maplibregl.Popup().setText(
        journyList.find((marker) => marker.id === id)?.summary
      );
      marker.setPopup(popup);
    }
  }, []);
  const onMapClick = (e) => {
    console.log(e.lngLat);
  };
  const onMarkerClick = (e: MapEvent, j: JournyPoint) => {
    //
  };
  const popup = (
    <Popup longitude={132.721} latitude={34.366}>
      テスト
    </Popup>
  );
  return (
    <>
      <Map
        initialViewState={{
          longitude: 132.421,
          latitude: 34.368,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        onClick={onMapClick}
        mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
      >
        {journyList.map((j, i) => (
          <Marker
            longitude={j.lon}
            latitude={j.lat}
            key={i}
            onClick={() => handleMarkerClick(j.id)}
            ref={(el) => (markerRefs.current[j.id] = el)}
          >
            <FaMapMarkerAlt size={20} />
          </Marker>
        ))}
      </Map>
    </>
  );
}
