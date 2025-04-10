<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>


<h1 class="text-4xl text-center mb-5">Weather App</h1>

{@render children()}

