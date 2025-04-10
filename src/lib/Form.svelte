<script lang='ts'>
  import { goto } from "$app/navigation"; 

  let city = '';

  function onClick() {
    if (city) {
      goto(`/${city.trim()}`);
    }
  }

</script>

<div class="flex flex-wrap gap-2 items-center justify-center m-5 max-w-screen">
  <input type="text" name="location" placeholder="location" bind:value={city} class="border text-2xl p-1 rounded">
  <button class="bg-blue-500 text-white p-3 rounded hover:bg-blue-700" onclick={onClick}>Search</button>
</div>

