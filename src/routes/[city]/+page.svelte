<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const { weather, error } = data;

  function getIcon(id: number) {
    if (id >= 200 && id < 300) return "thunder";
    if (id >= 300 && id < 400) return "drizzle"; 
    if (id >= 500 && id < 510) return "rain";
    if (id === 511) return "snow";
    if (id >= 512 && id < 600) return "rain2";
    if (id >= 600 && id < 700) return "snow";
    if (id >= 700 && id < 800) return "wind";
    if (id === 800) return "clear";
    if (id >= 801) return "cloudy";
  }
  
</script>

{#if weather}
  <div
    class="flex flex-col gap-0 items-center justify-center pt-5 pb-5 min-w-min max-w-md rounded-2xl shadow-xl bg-white m-auto border border-gray-200"
  >
    <span class="p-0 flex flex-col rounded-2xl justify-center items-center">
      <h1 class="text-4xl m-1">{weather.name}</h1>
      <img src={`/svgs/${getIcon(weather.weather[0].id)}.svg`} width="250" alt="" class=" h-50 p-0" />
    </span>
    <div class="flex justify-center gap-6 mb-5">
      <h1 class="text-6xl text-black">
        {Math.round(weather.main.temp)}°C
      </h1>
      <span>
        <h1 class="text-2xl font-bold text-left">{weather.weather[0].main}</h1>
        <p class=" text-gray-600">{weather.weather[0].description}</p>
      </span>
    </div>
    <div class="flex gap-5 flex-wrap justify-center items-center mb-5 mt-4 max-w-100">
      <span   
        class="p-5 pr-10 min-w-45 shadow-xl border border-gray-200 rounded-2xl"
      >
        <h1 class="text-xl font-bold">Feel like</h1>
        <span class="text-2xl"
          >{Math.round(weather.main.feels_like)}°<span class=" text-xl">C</span>
        </span>
      </span>
      <span
        class="p-5 pr-10 min-w-45 shadow-xl border border-gray-200 rounded-2xl"
      >
        <h1 class="text-xl font-bold">Wind speed</h1>
        <span class="text-2xl"
          >{Math.round(weather.wind.speed)} <span class="text-sm">m/s</span>
        </span>
      </span>
      <span
        class="p-5 pr-10 min-w-45 shadow-xl border border-gray-200 rounded-2xl"
      >
        <h1 class="text-xl font-bold">Humidity</h1>
        <span class="text-2xl"
          >{Math.round(weather.main.humidity)} <span class="text-sm">%</span>
        </span>
      </span>
      <span
        class="p-5 pr-10 min-w-45 shadow-xl border border-gray-200 rounded-2xl"
      >
        <h1 class="text-xl font-bold">Pressure</h1>
        <span class="text-2xl"
          >{Math.round(weather.main.pressure)} <span class="text-sm"> hPa</span>
        </span>
      </span>
    </div>
  </div>
{:else if error}
  <div>
    <h1>{error}</h1>
  </div>
{:else}
  <div class="flex justify-center items-center">
    <h1>...</h1>
  </div>
{/if}
