<script>
  import Nav from './components/Nav.svelte';
  import View from './components/View.svelte';
  import Header from "./components/Header.svelte";

  import { darkTheme } from "./store.js";

	// So we can use class:dark
	$: dark = $darkTheme;
</script>

<main class:dark>
  <View>
    <div class="h-screen flex flex-col">
      <Nav />

      <Header />

      <!-- this will contain the down arrow to tell you to look at my projects and will help with layout -->
      <div class="w-full h-36"></div> 
    </div>
  </View>
</main>

<style>

</style>
