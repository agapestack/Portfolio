<template>
<transition name="fade">
  <div id="navbar"  v-if="windowTop >= (innerHeight - 200)" >
    <b-navbar toggleable="lg">

      <b-navbar-nav>
        <b-navbar-brand href="#home" ><strong>Agape</strong></b-navbar-brand>
      

      <!-- <a href="#" class="fa fa-facebook"></a> -->
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home">Home</b-nav-item>
          <b-nav-item href="#projects">Projects</b-nav-item>
          <b-nav-item href="#about">About</b-nav-item>
          <b-nav-item href="#contact">Contact</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      windowTop : 0,
      innerHeight: window.innerHeight,
    }
  },
    mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    }
  }
}
</script>

<style scoped>
#navbar, nav {
  height: 64px;
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.205);
  position: fixed;
  top: 0px;
  z-index: 10;
  background: white;
}

.navbar-brand, 
.navbar-collapse {
  margin: 0 10vw;
}

a.nav-link {
  margin: 0 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>