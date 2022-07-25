<template>
    <div style='border: 1px solid black; width: 150px; padding: 5px; margin: 5px;'>
        <img style='float: left;' :src="avatarUrl" alt='huh' />
        <router-link :to="{ name: 'player', params: {playerid: playerId} }">
          <p>{{ playerName }}</p>
        </router-link>
    </div>
</template>

<script>
import { backendGet } from '../helpers';

export default {
  props: ['playerName', 'playerFavouritePokemon', 'playerId'],
  data: () => ({
    avatarUrl: '',
  }),
  created() {
    backendGet(`external/pokemon/${this.$props.playerFavouritePokemon}`)
      .then((response) => response.json())
      .then((result) => {
        this.avatarUrl = result.sprites.front_default;
      });
  },
};
</script>
