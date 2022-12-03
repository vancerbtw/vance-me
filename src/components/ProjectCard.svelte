<script >
  export let name;
  export let bannerUrl;
  export let iconUrl;
  export let buttonBackgroundProp;
  export let projectUrl;

  $: buttonBackground = buttonBackgroundProp;

  const visit = () => {
    window.open(
      projectUrl,
      '_blank'
    )
  }
</script>

<div 
  class="
    project-card
    bg-white
    dark:bg-[#414146]
    justify-self-center
    flex
    flex-col
    rounded-xl
    overflow-hidden
  "
  style="--aspect-ratio: 4/3;"
>
  <img src={bannerUrl} alt={`${name} Banner`} class="
    w-full
    flex-1
    object-cover
  " />

  <div class="h-28 flex items-center px-4">
    <img src={iconUrl} alt={`${name} Icon`} class="
      w-14
      h-14
      rounded-full
    " />

    <p class="text-2xl font-semibold ml-4">{name}</p>

    <div class="flex-1 flex justify-end">
      <button
        on:click={visit}
        class="
          p-2 rounded-xl px-8
          hover:scale-110 transition in-expo cursor-pointer transition
          text-white font-semibold
        "
        style="background: {buttonBackground};"
      >
        Visit
      </button>
    </div>
  </div>
</div>

<style>
  .project-card {
    width: 100%;
	  aspect-ratio: var(--aspect-ratio);
  }
</style>