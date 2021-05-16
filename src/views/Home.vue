<template>
  <div>
    <div class="layout">

      <div class="text-container">
            <div class="title">
              <h1>Agape</h1>
              <h2>Passionate Developper</h2>
            </div>

        <a href="#projects">
          <b-button>Discover Now!</b-button>
        </a> 
        
      </div>

      <div class="card-container">

        <div class="conception-card card" 
          data-aos="fade-left" 
          data-aos-duration="1500"
          data-aos-delay="1000">

          <div class="card-text">
            <h3>Conception, Production</h3>
          </div>
          
          <div class="card-image">
            <b-img src="../assets/conception.jpg" alt="Responsive image"></b-img> 
          </div>
        </div>
        
        <div class="frontend-card card" 
          data-aos="fade-left" 
          data-aos-duration="1500"
          data-aos-delay="1500">

          <div class="card-text">
            <h3>Front-end</h3>
          </div>

          <div class="card-image">
            <b-img src="../assets/frontend.jpg" alt="Responsive image"></b-img>
          </div>
        </div>
        
        <div class="backend-card card" 
          data-aos="fade-left" 
          data-aos-duration="1500"
          data-aos-delay="2000">

          <div class="card-text">
            <h3>Back-end</h3>
          </div>

          <div class="card-image">
            <b-img src="../assets/backend.jpg" alt="Responsive image"></b-img>
          </div>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>

#home {
  display: flex;
  justify-content: center;
  align-items: center;
}
.layout {
  height: 90vh;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* border-radius: 10px; */
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
}
.title h1 {
  font-size: 72px;
  padding: 1rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-height: 100vh;
}

.card {
  display: grid;
  grid-template-columns: 5fr 7fr;
  flex-direction: row;
  width: 60%;
  overflow: hidden;
  border-radius: 10px;
}


.card-text {
  display: flex;
  margin: 0 20%;
  justify-content: center;
  align-items: center;
}

.card-image {
  overflow: hidden;
}

.card-container img {
  max-height: 25vh;
  max-width: 25vw;
  object-fit: contain;
  transition: transform .5s ease;
  overflow: hidden;
}

.card-container img:hover {
  transform: scale(1.25);
}

.title-card {
  display: flex;
  flex-direction: column;
}

</style>