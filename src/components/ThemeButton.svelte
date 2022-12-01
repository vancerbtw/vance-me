<script>
  import { darkTheme } from "../store";
  import WiDaySunny from 'svelte-icons/wi/WiDaySunny.svelte'
  import Button from "./Button.svelte";
  import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte'

  const toggleDark = () => {
    $darkTheme = !$darkTheme;
  }
</script>

<Button on:click={toggleDark}>
  <div class="h-6 w-6">
    {#if $darkTheme}
      <WiDaySunny />
    {:else}
      <FaRegMoon />
    {/if}
  </div>
</Button>