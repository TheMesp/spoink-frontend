<template>
  <div>
    <p>Here's the players:</p>
    <hr>
    <div class="list-unstyled" v-for="player in players.data" :key="player.id">
      <PlayerMinbox
        :player-name="player.discord_name"
        :player-profile-url="player.profile_pic_url"
        :player-id="player.id"
      />
    </div>
  </div>
</template>

<script>
import PlayerMinbox from '@/components/PlayerMinbox.vue';
import { backendGet } from '../helpers';

export default {
  name: 'PlayersComponent',
  data: () => ({
    error: '',
    players: [],
  }),

  mounted() {
    backendGet('players')
      .then((response) => response.json())
      .then((result) => {
        this.players = result;
      });
  },
  methods: {},
  components: {
    PlayerMinbox,
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
