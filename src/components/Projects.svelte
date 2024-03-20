<script>
    import ProjectCard from "./ProjectCard.svelte";
    import RevvyIconUrl from "../assets/projects/revvy/revvy-app-icon.png";
    import RevvyBannerUrl from "../assets/projects/revvy/revvv-preview.png";
</script>

<div class="w-full flex flex-col items-center">
  <div class="sm:px-5 w-10/12 xl:w-2/3 py-8 pb-20">
    <h1 class="text-4xl font-semibold">My Projects</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 overflow-visible">
      <ProjectCard projectUrl="https://revvyapp.com/" name="Revvy" iconUrl={RevvyIconUrl} bannerUrl={RevvyBannerUrl} buttonBackgroundProp="linear-gradient(95.99deg, #3E2ACB 7.76%, #5A1DB6 71.74%)" />
    </div>
  </div>
</div>
