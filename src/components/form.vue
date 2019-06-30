<template>
  <div class="form-container">
    <form v-on:submit="sendXhr">
      <div class="main-carousel">
        <div v-for="(item, index) in items" :key="index" class="carousel-cell">
          <img v-bind:src="require(`@/assets/${item.image}`)">
        </div>
      </div>
      <p>{{selection}}</p>
      <button type="submit">Submit</button>
    </form>
    <p>You have chosen: {{ reqresAnswer }}</p>
    <p>{{ reqresSuggest }}</p>
  </div>
</template>

<script>
import Flickity from 'flickity'
var flkty;
console.log(flkty);
export default {
  mounted() {
    console.log('mounted');
    // setTimeout(() => {
      this.initFlickity();
    // },10);
  },
  activated() {
    console.log(flkty);
    flkty.resize();
  },
  data() {
    return {
      selection: "not indicated",
      suggest: "",
      reqresAnswer: "empty",
      reqresSuggest: "",
      items: [
        {name: 'Rocky the Pious', image: 'pray.png', suggest: 'You serve to the higher forces of this world'},
        {name: 'Fluffo & Katzooie', image: 'ninjas.png', suggest: 'You are into Eastern mysticism and ZEN'},
        {name: 'Plumber', image: 'plumber.png', suggest: 'You are very handy'},
        {name: 'Georgie the NUMTOT', image: 'bike.png', suggest: 'You liek to hang at New urbanist memes for transit-oriented teens'}
      ]
    }
  },
  methods: {
    sendXhr() {
      let r = this.reqresAnswer; 
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://reqres.in/api/users', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          // console.log(xhr.responseText);
        
        
          var json = JSON.parse(xhr.responseText);
          console.log(json.name + ", " + json.suggest);
          this.reqresAnswer = json.name;
          this.reqresSuggest = json.suggest;
        }
      };
      let d = {"name": this.selection, "suggest": this.suggest};
      let data = JSON.stringify(d);
      xhr.send(data);
    },
    initFlickity() {
      var elem = document.querySelector('.main-carousel');
      console.log(elem);
      flkty = new Flickity( elem, {
        // options
        cellAlign: 'center',
        contain: true,
        wrapAround: true
      });
      flkty.on( 'settle', (index) => {
        console.log(index);
        console.log(this.items[index].name);
        this.selection = this.items[index].name;
        this.suggest = this.items[index].suggest;
      });
      flkty.on( 'scroll', (progress) => {
        this.selection = '...';
      });      
    }
  }
}
</script>

<style lang="less">
@import '~flickity/css/flickity.css';
.main-carousel {
  margin: 2rem 0;
  .carousel-cell {
    padding: 0 1rem;
    width: 100vw;
    max-width: 100vw;
    min-height: 492px;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 100%;
    }
    @media (min-width: 492px) {
      width: auto;
      min-width: 492px;
      > img {
        width: auto;
      }
    }
    
  }
}
</style>
