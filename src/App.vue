<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/choose">Choose fighter</router-link>
    </div>
    <keep-alive include="choose">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
body {
  margin: 0;  
}
#nav {
  height: 22px;
}
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
