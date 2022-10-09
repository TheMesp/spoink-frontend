<template>
  <div style='width: 40px; height: 30px; overflow: hidden;'>
    <img :style='iconInline' src="../assets/pokemonicons-sheet.png" :alt='pokemonName' />
  </div>
</template>

<script>
export default {
  props: ['pokemonId', 'pokemonName'],
  data: () => ({
    x: 0,
    y: 0,
  }),

  mounted() {
    this.x = Math.floor(Number(this.pokemonId) / 12) * 30;
    this.y = Math.floor(Number(this.pokemonId) % 12) * 40;
  },

  computed: {
    iconInline() {
      return `margin: -${this.x}px 0px 0px -${this.y}px;`;
    },
  },
};
</script>
