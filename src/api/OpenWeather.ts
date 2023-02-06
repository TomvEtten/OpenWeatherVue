import type { LatLong } from "@/interfaces/latLongInterface";
import type { Weather } from "@/interfaces/weatherInterface";

interface openWeatherApiResponse {
    clouds: {
        all: number
    }
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }
}

export const openWeather = {
  getWeatherForGivenLatLong: (latLong: LatLong): Promise<Weather> => {
    return fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat="+ latLong.lat +"&lon=" + latLong.long +"&units=metric&appid=" + import.meta.env.VITE_OPEN_WEATHER_API_KEY
    )
      .then((response: Response) => response.json())
      .then((data: openWeatherApiResponse) => {
       return {
        today: {
            temp: data.main.temp,
            clouds: data.clouds.all
        },
        tomorrow: {
            temp: data.main.temp,
            clouds: data.clouds.all
        }
       } as Weather;
      });
  },
};
