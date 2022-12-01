<script>
    import ContactButton from "./ContactButton.svelte";
    import Logo from "./Logo.svelte";
    import ThemeButton from "./ThemeButton.svelte";
</script>

<div class="w-full flex flex-row p-5">
  <div class="flex-1">
    <Logo 
      width={50}
      height={50}
    />
  </div>

  <div class="flex flex-row gap-4 items-center">
    <ThemeButton />

    <ContactButton />
  </div>
</div>