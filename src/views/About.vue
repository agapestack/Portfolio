<template>
<div>
  <div class="fake-nav"></div>
  <div class="about-container">

    <div class="title" data-aos="fade-down" data-aos-duration="1000">
      <!-- <h1>About</h1> -->

      <h3>Work In Progress</h3>
    </div>


<!-- 
    <div class="bio" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
      <div class="bio-text">
        <h3>Quick Bio</h3>
        <p>
          I'm Agape, A 22 years old student in Computer Science at Sorbonne College, fullstack freelance developer, in short a big computer enthusiast.
          Due to the corona virus crise and the difficulties in following classic course, I decided to learn full-stack development on my own.
        </p>
      </div>

      <div class="bio-image">
        <img src="../assets/jussieu.jpeg" alt="Campus">
      </div>

    </div>

    <div class="tech" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
      <h2>Technologies</h2>
    </div>

    <div class="hobbies" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500">
      <h2>hobbies</h2>
    </div> -->


</div>
</div>

</template>

<script>
export default {
  name: 'About',
  components: {
    
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 5px;
  background: black;
}
::-webkit-scrollbar-thumb {
  background: white;
}

.about-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 10fr 25fr 25fr 25fr 10fr;
  grid-row-gap: 2rem;
  height: calc(100vh - 64px);
  color: white;
}

.title {
  grid-row: 1;
  grid-column: 2 / 3;
  display: flex; 
  justify-content: center;
  align-items: center;
}

.bio {
  grid-row: 2;
  grid-column: 2 / 8;
  display: grid;
  grid-template-columns: 70fr 30fr;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2rem;
  border-radius: 10px;
}

.bio-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hobbies {
  grid-row: 4;
  grid-column: 2 / 6;
  display: flex; 
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2rem;
    border-radius: 10px;
}

.tech {
  grid-row: 3;
  grid-column: 3 / 8;
  display: flex; 
  flex-direction: row-reverse;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2rem;
    border-radius: 10px;
}
</style>