import type { LatLong } from "@/interfaces/latLongInterface";

interface geoCodingItem {
  lat: number;
  lon: number;
}

interface geoCodingResponse extends Array<geoCodingItem> {}

export const geocoding = {
  getLatLongFromCityName: (name: string): Promise<LatLong> => {
    return  fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        name +
        "&limit=1&appid=" + import.meta.env.VITE_OPEN_WEATHER_API_KEY
    )
      .then((response: Response) => response.json())
      .then((data: geoCodingResponse) => {
        return {  
          lat: data[0].lat,
          long: data[0].lon
        } as LatLong
      });
  },
};
