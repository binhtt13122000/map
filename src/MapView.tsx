// Map.tsx
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import MapEvents from "./MapEvents";
import { useState } from "react";

const MapView = () => {
  const [list, setList] = useState([]);
  const [searchParams] = useSearchParams();
  return (
    <MapContainer center={
      [searchParams.get("lat") === null ? 10.762622 : Number(searchParams.get("lat")), 
        searchParams.get("lon") === null ? 106.660172 : Number(searchParams.get("lon"))]} zoom={Number(searchParams.get("zoom"))} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {list?.map(({ _id, lat_snode, long_snode, lat_enode, long_enode, LOS }) => {
        return <Polyline
          key={_id} positions={[
            [lat_snode, long_snode], [lat_enode, long_enode],
          ]} color={LOS === 'A' ? '#00ff00' : (LOS === 'B' ? '#00ff00' : (LOS === 'C' ? '#ff8c00' : (LOS === 'D' ? '#ff0000' : (LOS === 'E' ? '#ff0000' : (LOS === 'F' ? '#ff0000' : 'white')))))} />
      })}
      <MapEvents setList={setList} date={searchParams.get("date")} period={searchParams.get("period")} />
    </MapContainer>
  );
}

export default MapView;