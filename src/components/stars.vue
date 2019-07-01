<template>
  <div class="parallax-container">
    <div class="parallax">
      <div id="title" class="slide header">
        <h1>Our existence is under threat</h1>
      </div>

      <div id="slide1" class="slide">
        <div class="title">
          <h1>Giant watermelon</h1>
          <p>is on a collision course with our planet</p>
          
          <!-- <nav-button :click-function="showDate" b-class="btn-danger btn-sm" b-text="show year">BUTTON</nav-button> -->
        </div>
      </div>

      <div id="slide2" class="slide">
        <div class="title">
          <p>many of our brave comrades have fallen while fighting the menace</p>
        </div>
        <img src="../assets/water.jpg">
        <img src="../assets/ate.jpg"> 
      </div>

      <div id="slide3" class="slide">
        <div class="title">
          <h1>It is our duty</h1>
          <p>to rise up to the greatest challenge we have ever faced</p>
        </div>
      </div>

      <div id="slide4" class="slide header">
        <div class="title">
          <h1>Now choose your fighter</h1>
          <nav-button/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navButton from './navButton.vue'
export default {
  name: 'stars',
  components: {
    'nav-button' : navButton
  }
}

</script>

<style scoped lang="less">
@import (css) url("//fonts.googleapis.com/css?family=Nunito");
.parallax-container {
  height: calc(100vh - 22px);
  overflow: hidden;
}
.parallax { 
  margin:0;
  padding:0;
	perspective: 1px;
	transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: Nunito;
}

h1 {
   font-size: 250%
}

p {
  font-size: 140%;
  line-height: 150%;
  color: #333;
}

.slide {
  position: relative;
  padding: 25vh 10%;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
	transform-style: inherit;
}

img {
  position: absolute;
  top: 50%;
  left: 35%;
  width: 320px;
  height: auto;
  transform: translateZ(.25px) scale(.75) translateX(-94%) translateY(-100%) rotate(2deg);
  padding: 10px;
  border-radius: 5px;
  background: rgba(240,230,220, .7);
  box-shadow: 0 0 8px rgba(0, 0, 0, .7);
}

img:last-of-type {
  transform: translateZ(.4px) scale(.6) translateX(-104%) translateY(-40%) rotate(-5deg);
}

.slide:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, .7);
}

.title {
  padding: 5%;
  border-radius: 5px;
  background: rgba(240,230,220, .7);
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
}

.slide:nth-child(2n+1) .title {
  margin-left: auto;
  margin-right: 0;
  width: 50%;
}

.slide, .slide:before {
  background: 50% 50% / cover;  
}

.header {
  text-align: center;
  font-size: 175%;
  color: #fff;
  text-shadow: 0 2px 2px #000;
}

#title {
  background-image: url("../assets/earth.jpg");
  z-index:2;
}

#title h1 {
 transform: translateZ(.25px) scale(.75);
 transform-origin: 50% 100%;
 animation: shake .5s infinite alternate-reverse;
}
@keyframes shake {
  0%   {transform: translateX(0px) translateY(0px)}
  15%  {transform: translateX(.5px) translateY(.5px)}
  30%  {transform: translateX(-.5px) translateY(-.5px)}
  45% {transform: translateX(-.5px) translateY(.5px)}
  60% {transform: translateX(.5px) translateY(-.5px)}
  75% {transform: translateX(-.5px) translateY(.5px)}
  90% {transform: translateX(.3px) translateY(-.3px)}
  100% {transform: translateX(-.1px) translateY(.1px)}
}

#slide1:before {
  background-image: url("../assets/space.jpg");
  transform: translateZ(-1px) scale(2);
}

#slide2 {
  background-image: url("../assets/seymour.jpg");
  z-index:2;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
}

#slide3:before {
  background-image: url("../assets/ninjas_large.jpg");
  transform: translateZ(-1px) scale(2);
}

#slide4 {
  background: #222;
  &:before {
    z-index: -1;
  }
  .title {
    width: auto;
  }  
}
</style>
