<script lang="ts">

  interface WeatherData {
    name: string;
    weather: [{ id: number; description: string }];
    main: {
      temp: number;
      humidity: number;
      feels_like: number;
      pressure: number;
    };
    wind: { speed: number };
  }

  const apiKey = import.meta.env.VITE_API_KEY;

  let city: string;

  let weather: WeatherData | null = null;
  let error: string;

  async function fetchData(city: string) {
    if (!city) error = "Please Enter Location Name! ";

    try {
      error = "";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) throw new Error("Could not fetch data! ");

      const data = await response.json();
      weather = data;

      console.log(data);
    } catch (err) {
      weather = null;
      error = err instanceof Error ? err.message : "An unknown error occurred.";
    }
  }

  function getEmoji(id: number) {
    if (id >= 200 && id < 300) {
      return "🌩️";
    } else if (id >= 300 && id < 400) {
      return "🌧️";
    } else if (id >= 500 && id < 600) {
      return "🌧️";
    } else if (id >= 600 && id < 700) {
      return "❄️";
    } else if (id >= 700 && id < 800) {
      return "☁️";
    } else if (id === 800) {
      return "☀️";
    } else if (id > 800) {
      return "⛅️";
    }
  }
</script>

<svelte:head>
  <title>Weather App</title>
</svelte:head>

<h1 class="text-center text-3xl text-white m-2">Weather App</h1>

<div class="flex justify-center gap-2 m-3">
  <input
    class="p-1 rounded border"
    type="text"
    placeholder="Enter Location"
    bind:value={city}
  />
  <button
    class="text-white bg-green-400 p-1 rounded hover:bg-green-700"
    onclick={() => fetchData(city)}>Get weather</button
  >
</div>

{#if weather !== null}
  <div class="bg-white p-4 m-3 rounded flex flex-col justify-center">
    <h1 class="text-center text-3xl font-mono">{weather.name.toUpperCase()}</h1>
    <div class="flex flex-row justify-center mt-6 mb-7">
      <span class="text-center text-9xl">{getEmoji(weather.weather[0].id)}</span
      >
      <div
        class="flex flex-col justify-between items-center mt-12 mb-10 min-w-72"
      >
        <span class="text-left text-6xl">{Math.round(weather.main.temp)}°C</span
        >
        <span class="text-2xl text-left">{weather.weather[0].description}</span>
      </div>
    </div>
    <div class="flex flex-wrap mt-6 justify-center">
      <span
        class="bg-opacity-50 m-1 p-4 text-center w-48 border rounded-md text-3xl"
      >
        <p class="text-xl">Feels like</p>
        <br />
        {weather.main.feels_like}°C
      </span>
      <span
        class="bg-opacity-50 m-1 text-center w-48 border rounded-md p-4 text-3xl"
        ><p class="text-xl">Humidity</p>
        <br />
        {weather.main.humidity} %
      </span>
      <span
        class="bg-opacity-50 m-1 text-center w-48 border rounded-md p-4 text-3xl"
      >
        <p class="text-xl">Air Pressure</p>
        <br />
        {weather.main.pressure} hPa
      </span>
      <span
        class="bg-opacity-50 m-1 text-center w-48 border rounded-md p-4 text-3xl"
      >
        <p class="text-xl">Wind speed</p>
        <br />
        {weather.wind.speed} mi/h
      </span>
    </div>
  </div>
{/if}
<!-- ☁️ ☀️ ⛅️ 🌧️ ⛈️ 🌩️ -->
