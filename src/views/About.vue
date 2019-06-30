<template>
  <div class="about">
    <h1>Choose your fighter</h1>
    <form-element/>
  </div>
</template>

<script>
import form from '../components/form.vue'
export default {
  name: 'about',
  components: {
    'form-element' : form
  }
}
</script>
