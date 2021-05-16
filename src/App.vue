<template>
  <div id="app" class="app">

    <Navbar />
  
    <main>
      <section><Home class="views fullpage" id="home"/></section>
      <section><Projects class="views  fullpage container" id="projects"/></section>
      <section><About class="views  fullpage container" id="about"/></section>
      <section><Contact class="views  fullpage container" id="contact"/></section>
    </main>

    <section>
      <Footer id="footer"/>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
import Contact from './views/Contact'

export default {
  components: {
    Navbar,
    Home,
    About,
    Contact,
    Projects,
    Footer
  },
}
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

.app {
  // background-color: #292929;
  // color: white;
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

</style>
