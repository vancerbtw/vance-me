<script>
    import Nav from './components/Nav.svelte';
    import View from './components/View.svelte';
    import Header from "./components/Header.svelte";

    import { darkTheme, y } from "./store.js";
    import Footer from './components/Footer.svelte';
    import Projects from './components/Projects.svelte';
    import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
    

	// So we can use class:dark
	$: dark = $darkTheme;

  darkTheme.subscribe((value) => {
    if (value) {
      window.document.body.classList.add("bg-background-dark");
    } else {
      window.document.body.classList.remove("bg-background-dark");
    }
  });

  y.subscribe((value) => {
    console.log("uh")
    const results = window.document.getElementsByClassName("projects-container");
    if (results.length <= 0) return;

    const container = results[0];

    if (value > 0) {
      container.classList.add("hide");
      container.classList.remove("show");
    } else {
      setTimeout(() => {
        container.classList.add("show");
        container.classList.remove("hide");
      }, 2000);
    }
  });

  setTimeout(() => {
    if ($y <= 0) {
      const results = window.document.getElementsByClassName("projects-container");
      if (results.length <= 0) return;

      const container = results[0];

      container.classList.add("show");
      container.classList.remove("hide");
    }
  }, 4000);

  const goToProjects = () => {
    const element = document.getElementById("projects-container");

    element.scrollIntoView({
      behavior: "smooth" 
    });
  }
</script>

<main class:dark>
  <View>
    <div class="h-screen min-h-screen flex flex-col items-center">
      <Nav />

      <Header />

      <!-- this will contain the down arrow to tell you to look at my projects and will help with layout -->
      <div class="w-full h-36 scroll-alert flex flex-col items-center justify-end">
        <button on:click={goToProjects} id="projects-container" class="projects-container flex flex-row text-lg font-bold items-center mb-4 cursor-pointer">
          Projects!
        
          <div class="h-5 w-12 text-indigo-500 w-1/6 m-1 show">
            <FaChevronDown />
          </div>
        </button>
      </div> 
    </div>

    <Projects />

    <Footer />
  </View>
</main>

<svelte:window bind:scrollY={$y} />

<style>
  .projects-container {
    position: absolute;
    opacity: 0;
  }

  .show {
    opacity: 1;
    animation: fadeIn 0.5s linear 1;
  }

  .hide {
    opacity: 0;
    animation: fadeOut 0.5s linear 1;
  }

  /* ANIMATION */

  @keyframes fadeIn {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }
</style>