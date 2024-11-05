//Route.tsx

import { useMapEvents } from "react-leaflet";
import data from "./data_v.json";
import { useEffect } from "react";

const MapEvents = ({ setList, date, period }: { setList: any, date: any, period: any }) => {
    const calculate = (map: any) => {
        if(map.getZoom() >= 17) {
            const neLat = map.getBounds().getNorthEast().lat;
            const neLon = map.getBounds().getNorthEast().lng;
            const swLat = map.getBounds().getSouthWest().lat;
            const swLon = map.getBounds().getSouthWest().lng;
            
            const filtered = data.filter((x: any) => {
                return x.date === date && x.period === period && ((swLat <= x.lat_snode && x.lat_snode <= neLat && swLon <= x.long_snode && x.long_snode <= neLon) 
                || (swLat <= x.lat_enode && x.lat_enode <= neLat && swLon <= x.long_enode && x.long_enode <= neLon))
            });

            setList(filtered);

        } else {
            setList([]);
        }
    }

    const map = useMapEvents({
        moveend: () => {
            calculate(map);
        },
        zoomend: () => {
            calculate(map);
        }
        
      });

      useEffect(() => {
        calculate(map);
      }, []);
      return null;
};

export default MapEvents;