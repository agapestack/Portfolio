<template>
  <div id="side-nav"
    data-aos="fade-left" 
    data-aos-duration="1500"
  >
    <div class="full-menu"  >
      <h2><a href="#home">Home</a></h2>
      <h2><a href="#about">About</a></h2>
      <h2><a href="#projects">Work</a></h2>
      <h2><a href="#contact">Contact</a></h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "SideNav",
}
</script>

<style scoped>
#side-nav {
  position: fixed;
  right: -20px;
  top: 40vh;
  border: 1px solid white;
}

#side-nav a {
  color: white;
  text-decoration: none;
}

</style>