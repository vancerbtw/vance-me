<div class="holder mt-2">
  <div class="item flex flex-row items-end gap-2">
    <span class="text-primary text-[2em] leading-[1em]">Frontend</span>
    <span class="text-[2em] leading-[1em]">Developer</span>
  </div>

  <div class="item flex flex-row items-end gap-2">
    <span class="text-primary text-[2em] leading-[1em]">Backend</span>
    <span class="text-[2em] leading-[1em]">Developer</span>
  </div>

  <div class="item flex flex-row items-end gap-2">
    <span class="text-primary text-[2em] leading-[1em]">Mobile</span>
    <span class="text-[2em] leading-[1em]">Developer</span>
  </div>
</div>

<style>
  .holder {
    position: relative;
    height: 3em;
  }

  div.item {
    position: absolute;
    transform-origin: 50% 70%;
    width: 300;
    opacity: 0;
    animation: changeword 9s linear infinite;
  }

  div.item:nth-child(1) {
    animation-delay: 0s;
  }

  div.item:nth-child(2) {
    animation-delay: 3s;
  }

  div.item:nth-child(3) {
    animation-delay: 6s;
  }

  /* ANIMATION */

  @keyframes changeword {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  
  5% {
    opacity: 1;
    transform: translateY(0);
  }
  
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  
  30% {
    opacity: 0;
    transform: translateY(20px);
  }
  
  90% {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>