<template>
  <div class="home">
    <h2>
      Welcome to {{ player.discord_name }} ({{player.showdown_name}})'s Profile
    </h2>
    <img :src="player.profile_pic_url" alt='huh' />
  </div>
</template>

<script>

// Todo: refactor these links into a function
const API_URL = 'http://138.197.159.196:3000/players';

export default {
  data: () => ({
    error: '',
    player: {},
  }),

  created() {
    fetch(`${API_URL}/${this.$route.params.playerid}`)
      .then((response) => response.json())
      .then((result) => {
        this.player = result.data;
      });
  },
};
</script>
