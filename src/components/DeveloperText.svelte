<span class="holder">
  <span class="item text-primary">Frontend</span>
  <span class="item text-primary">Backend</span>
  <span class="item text-primary">Mobile</span>
</span>

<style>
  .holder {
    position: relative;
    width: 140px;
    height: 3em;
  }

  span.item {
    position: absolute;
    font-size: 2em;
    transform-origin: 50% 70%;
    width: 140px;
    opacity: 0;
    animation: changeword 9s linear infinite;
  }

  span.item:nth-child(1) {
    animation-delay: 0s;
  }

  span.item:nth-child(2) {
    animation-delay: 3s;
  }

  span.item:nth-child(3) {
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