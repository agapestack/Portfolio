<template>
  <div>
      <div class="left" data-aos="fade-down" data-aos-duration="2000"></div>
      <div class="right" data-aos="fade-down" data-aos-duration="2000"></div>
      <div class="top" data-aos="fade-left" data-aos-duration="2000"></div>

      <div class="temp-nav" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="1000">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Work</h3>
        <h3>Contact</h3>
      </div>

      <div class="text-container" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="1000">
        <div class="presentation">
          <h1>Agape</h1>
          <h2>Passionate Developper,</h2>
          <h5>based in Paris</h5>
          <a href="#about">
            <b-button>Discover Now!</b-button>
          </a> 
        </div>
    
      </div>

      <div class="card-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">

        <div class="conception-card card">
          <div class="card-text fluid">
            <h3>Conception, Production</h3>
          </div>
          
          <div class="card-image">
            <b-img src="../assets/conception.jpg" alt="Responsive image"></b-img> 
          </div>
        </div>
        
        <div class="frontend-card card">
          <div class="card-text">
            <h3>Front-end</h3>
          </div>
          <div class="card-image">
            <b-img src="../assets/frontend.jpg" alt="Responsive image"></b-img>
          </div>
        </div>
        
        <div class="backend-card card">
          <div class="card-text">
            <h3>Back-end</h3>
          </div>
          <div class="card-image">
            <b-img src="../assets/backend.jpg" alt="Responsive image"></b-img>
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
  display: grid;
  text-align: center;
  grid-template-rows: 10fr 55fr 35fr;
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
}

.temp-nav {
  grid-row: 1;
  grid-column: 3 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.temp-nav h3 {
  transition: transform .5s;
  padding: 1rem;
}
.temp-nav h3:hover {
  transform: scale(1.25);
  text-decoration: white underline;
}

.top {
  grid-row: 1;
  grid-column: 1 / 9;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
}
.left {
  grid-row: 1 / 4;
  grid-column: 1;
  border-right: 1px solid rgba(255, 255, 255, .5);
}
.right {
  grid-column: 8;
  grid-row: 1 / 4;
  border-left: 1px solid rgba(255, 255, 255, .5);
}

.text-container {
  grid-row: 2;
  grid-column: 3 / 7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.presentation {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  padding: 2rem 2rem;
}
.presentation h5 {
  font-weight: lighter;
}

.card-container {
  grid-row: 3;
  grid-column: 2 / span 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-height: 35vh;
  overflow: hidden;
}

.card {
  width: 20vw;
  height: 70%;
  display: grid;
  grid-template-rows: 2fr 8fr;
  overflow: hidden;
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: black;
}

.card-image {
  overflow: hidden;
}

.card img {
  object-fit: cover;
  height: 100%; 
  width: 100%;
  transition: transform .5s;
}

.card img:hover {
  transform: scale(1.25);
}

</style>