<template>
  <div class="home">
    <h2>
      Welcome to {{ player.discord_name }} ({{player.showdown_name}})'s Profile
    </h2>
    <img :src="avatarUrl" alt='Player avatar' />
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
    avatarUrl: '',
  }),

  methods: {
    loadPlayer(id) {
      backendGet(`players/${id}`)
        .then((response) => response.json())
        .then((result) => {
          this.player = result.data;
          backendGet(`external/pokemon/${this.player.favourite_pokemon}`)
            .then((externalResponse) => externalResponse.json())
            .then((pokeApi) => {
              this.avatarUrl = pokeApi.sprites.front_default;
            });
        });
      backendGet(`players/${id}/matches`)
        .then((response) => response.json())
        .then((result) => {
          this.playerMatches = result.data;
        });
    },
  },

  mounted() {
    this.loadPlayer(this.$route.params.playerid);
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        if (toParams.playerid) {
          this.loadPlayer(toParams.playerid);
        }
      },
    );
  },

  components: {
    MatchMinbox,
  },
};
</script>
