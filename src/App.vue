<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcomeeeee to Your Vue.js App"/> -->
    <stars></stars>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import stars from './components/stars.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    stars
  }
}
</script>

<style>
body {
  margin: 0;
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
