<script>

    import Button from "./Button.svelte";

</script>

<div class="dropdown relative">
  <Button>Let's Chat</Button>
  
  <div class="
    dropdown-content
    hidden absolute
    bg-red-500
    w-full
    flex-col
  ">
    <a href="#" class="w-full">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

<!-- display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1; -->

<style>
  .dropdown:hover .dropdown-content {
    display: flex;
  }
</style>