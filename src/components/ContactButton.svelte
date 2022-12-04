<script>
    import Button from "./Button.svelte";
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
    import IoMdMail from 'svelte-icons/io/IoMdMail.svelte';
</script>

<div class="dropdown relative">
  <Button>Let's Chat</Button>
  
  <div class="
    dropdown-content
    hidden absolute
    w-full
    flex-col
    items-center
    pt-2
  ">
    <button class="h-16 w-16 hover:text-primary" on:click={() => {
      window.open(
        "https://github.com/vancerbtw",
        '_blank'
      );
    }}>
      <DiGithubBadge />
    </button>

    <button class="h-12 w-12 pt-2 hover:text-primary" on:click={() => {
      window.open(
        "https://discordapp.com/users/908036328107692102",
        '_blank'
      );
    }}>
      <FaDiscord />
    </button>

    <button class="h-12 w-12 pt-2 hover:text-primary" on:click={() => {
      window.open(
        "mailto:vance@revvy.dev",
        '_blank'
      );
    }}>
      <IoMdMail />
    </button>
  </div>
</div>

<style>
  .dropdown-content > button {
    opacity: 0;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
  }

  .dropdown-content > button:hover {
    scale: 1.1;
  }

  .dropdown-content > button:nth-child(1) {
    animation: fadeIn 300ms ease-in 1;
    animation-fill-mode: forwards;
  }

  .dropdown-content > button:nth-child(2) {
    animation: fadeIn 0.3s ease-in 1;
    animation-delay: 50ms;
    animation-fill-mode: forwards; 
  }

  .dropdown-content > button:nth-child(3) {
    animation: fadeIn 0.3s ease-in 1;
    animation-delay: 100ms;
    animation-fill-mode: forwards; 
  }

  /* ANIMATION */

  @keyframes fadeIn {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>