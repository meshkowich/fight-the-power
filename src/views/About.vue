<template>
  <div class="choose">
    <div class="title">
      <h1>Choose your fighter</h1>
    </div>
    <form-element/>
  </div>
</template>

<script>
import form from '../components/form.vue'
export default {
  name: 'choose',
  components: {
    'form-element' : form
  }
}
</script>
<style>
h1 {
  font-family: Nunito;
  color: #fff;
  text-shadow: 0 2px 2px #000;
  margin: 0;
}
.title {
  padding: 1rem;
  border-radius: 5px;
  background: rgba(240, 230, 220, 0.7);
}
</style>

