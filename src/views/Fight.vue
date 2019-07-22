<template>
  <div class="fight">
    <game-element/>
  </div>
</template>
<script>
import game from '../components/game.vue'
export default {
  name: 'fight',
  components: {
    'game-element': game
  }
}
</script>