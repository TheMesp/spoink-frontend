<template>
  <div class="home">
    <h2>
      Welcome to {{ player.discord_name }} ({{player.showdown_name}})'s Profile
    </h2>
    <img :src="player.profile_pic_url" alt='Player avatar' />
    <p>
      Recent Matches:
    </p>
    <div class="list-unstyled" v-for="match in playerMatches" :key="match.id">
      <MatchMinbox
        :match-winner="match.winner_id"
        :match-loser="match.loser_id"
        :match-url="match.replay_link"
      />
    </div>
  </div>
</template>

<script>

import MatchMinbox from '@/components/MatchMinbox.vue';
import { backendGet } from '../helpers';

export default {
  data: () => ({
    error: '',
    player: {},
    playerMatches: [],
  }),

  created() {
    backendGet(`players/${this.$route.params.playerid}`)
      .then((response) => response.json())
      .then((result) => {
        this.player = result.data;
      });
    backendGet(`players/${this.$route.params.playerid}/matches`)
      .then((response) => response.json())
      .then((result) => {
        this.playerMatches = result.data;
      });
  },
  components: {
    MatchMinbox,
  },
};
</script>
