<template>
<div>
  <div class="fake-nav"></div>
  <div class="content">
    <h1>Work</h1>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style scoped>
.content {
  color: white;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 10fr 40fr 40fr 10fr;
}
</style>