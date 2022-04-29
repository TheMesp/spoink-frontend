<template>
  <div>
    <p>Here's the players:</p>
    <hr>
    <div class="list-unstyled" v-for="player in players.data" :key="player.id">
      <p>
        {{player.id}}
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
const API_URL = 'http://138.197.159.196:3000/players';

export default {
  name: 'PlayersComponent',
  data: () => ({
    error: '',
    players: [],
  }),

  mounted() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        this.players = result;
      });
  },
  methods: {},
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
