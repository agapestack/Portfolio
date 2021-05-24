<template>
  <div id="app" class="app">

    <div class="navigation" v-if="windowTop >= (innerHeight - 1)">
      <Navbar/>
      <SideNav/>
    </div>


  
    <main>
      <section><Home class="views fullpage" id="home"/></section>
      <section><About class="views  fullpage" id="about"/></section>
      <section><Projects class="views  fullpage" id="projects"/></section>
      <section><Contact class="views  fullpage" id="contact"/></section>
    </main>

    <section>
      <Footer id="footer"/>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
import Contact from './views/Contact'

export default {
  components: {
    Navbar,
    SideNav,
    Home,
    About,
    Contact,
    Projects,
    Footer,
  },
  data() {
    return {
      windowTop : 0,
      innerHeight: 0,
    }
  },
  mounted() {
    this.innerHeight = window.innerHeight
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


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
  font-size: 1.2rem;
}

.app {
  background: black;

}

.views {
  height: 100vh;
}
.fake-nav{
  height: 64px;
}

#footer {
  height: 35vh;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

#side-nav {
  z-index: 100;
  padding: 1rem 2rem;
  border-radius: 10px;
}

</style>
