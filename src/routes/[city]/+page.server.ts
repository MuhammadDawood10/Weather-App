import type { PageServerLoad } from "./$types";
import { WEATHER_API_KEY } from "$env/static/private";

interface WeatherData {
  name: string; // City name

  weather: {
    id: number;
    main: string;
    description: string;
  }[];

  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };

  wind: {
    speed: number;
  };
}

export const load: PageServerLoad = async ({ params }) => {
  const API_KEY = WEATHER_API_KEY;
  const city = params.city;

  if (!city) {
    return {
      error: "Please Enter a city!",
    };
  }

  const url = `https://pro.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);

  try {
    if (!res.ok) {
      throw new Error("Internal Server Error");
    } else if (res.status === 404) {
      throw new Error("Couldn't find Location");
    }

    const data: WeatherData = await res.json();
    console.log(data);
    return {
      weather: data,
      error: "",
    };
  } catch (error) {
    return {
      weather: null,
      error: error,
    };
  }
};
