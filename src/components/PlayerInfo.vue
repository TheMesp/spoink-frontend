<template>
  <div class="home">
    <h2>
      Welcome to {{ player.discord_name }} ({{player.showdown_name}})'s Profile
    </h2>
    <img :src="player.profile_pic_url" alt='huh' />
  </div>
</template>

<script>

import { backendGet } from '../helpers';

export default {
  data: () => ({
    error: '',
    player: {},
  }),

  created() {
    backendGet(`players/${this.$route.params.playerid}`)
      .then((response) => response.json())
      .then((result) => {
        this.player = result.data;
      });
  },
};
</script>
