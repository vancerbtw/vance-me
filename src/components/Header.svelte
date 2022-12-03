<script>
  import Animoji from "./Animoji.svelte";
  import DeveloperText from "./DeveloperText.svelte";
</script>

<div id="container" class="flex flex-row flex-1 sm:px-5 xl:w-2/3">
  <div class="flex flex-1 justify-center flex-col px-5">
    <div class="flex flex-row items-end">
      <span class="font-medium">Hey</span>

      <span class="font-medium text-primary">,</span>
    </div>

    <div class="flex flex-row items-center h-[4.25rem] mt-2">
      <h1 class="font-bold z-10">I'm Vance</h1>

      <div class="font-medium text-primary text-8xl">!</div>
    </div>

    <DeveloperText />
    
    <!-- <div class="flex flex-row items-center">
      <DeveloperText />

      <p>Developer</p>
    </div> -->
  </div>

  <div class="flex flex-1 justify-center items-center">
    <Animoji />
  </div>
</div>

<style>

  #container span {
    font-size: 3.5rem; 
    line-height: 3.5rem;
  }

  #container h1 {
    font-size: 4.25rem; 
    line-height: 4.25rem;
  }

  #container p {
    font-size: 2em; 
    line-height: 2em;
  }

  @media (max-width: 900px) {
    #container {
        flex-direction: column-reverse; 
        gap: 3rem;
        margin-top: 2rem;
        align-items: center;
    }
  }

  @media (max-width: 500px) {
    #container span {
      font-size: 2.5rem; 
      line-height: 2.5rem;
    }

    #container h1 {
      font-size: 3.25rem; 
      line-height: 3.25rem;
    }

    #container p {
      font-size: 2em; 
      line-height: 2em;
    }
  }

</style>