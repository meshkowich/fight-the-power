<template>
  <router-link to="/choose" div class="do-it"><span>do it</span></router-link>
</template>

<script>
export default {
  name: "navButton"
};
</script>

<style lang="less">
.do-it {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 3em;
  border: 3px solid;
  border-color: rgba(255, 255, 168, 0.1);
  animation: border-pulse 1.8s 0.2s infinite;
  border-radius: 5px;
  transition: border-color .5s;
}
.do-it span {
  text-transform: uppercase;
  text-decoration: none;
  z-index: 2;
}
.do-it::before,
.do-it::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
  left: 50%;
  text-align: center;
  z-index: 1;
}
.do-it span {
  transition: transform 0.5s;
}
.do-it:hover {
  animation: none;
  border-color: rgba(255, 255, 168, 0.3);
  span {
    transform: scale(1.2);
  }
}
.do-it:before {
  background-color: rgba(255, 255, 168, 0.15);
  animation: 1.3s pulse infinite ;
}
.do-it:after {
  background-color: rgba(255, 253, 138, 0.05);
  animation: 1s 0.5s pulse infinite ;
}
@keyframes pulse {
  0% {transform: translatex(-50%) scale(0)}
  70% {transform: translatex(-50%) scale(0.5,2)}
  100%   {transform: translatex(-50%) scale(1.1,3)}  
}
@keyframes border-pulse {
  0% {border-color: rgba(255, 255, 168, 0.1)}
  70% {border-color: rgba(255, 255, 168, 0.2)}
  100%   {border-color: rgba(255, 255, 168, 0.1)}  
}
</style>
