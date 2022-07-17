<template>
    <div style='border: 1px solid black; width: 150px; padding: 5px; margin: 5px;'>
      <button @click="show = !show">
        <p v-if="show">Hide Match</p><p v-else>Show Match</p>
      </button>
        <iframe v-if="show" :src="matchUrl" title='Replay link' />
        <p>
          <router-link :to="{ name: 'player', params: {playerid: matchWinner} }">
            {{ playerOne }}
          </router-link>
          vs
          <router-link :to="{ name: 'player', params: {playerid: matchLoser} }">
            {{ playerTwo }}
          </router-link>
        </p>
    </div>
</template>

<script>

import { backendGet } from '../helpers';

export default {
  data() {
    return {
      show: false,
      playerOne: 'Winner',
      playerTwo: 'Loser',
    };
  },

  created() {
    backendGet(`players/${this.matchWinner}`)
      .then((response) => response.json())
      .then((result) => {
        this.playerOne = result.data.discord_name;
      });
    backendGet(`players/${this.matchLoser}`)
      .then((response) => response.json())
      .then((result) => {
        this.playerTwo = result.data.discord_name;
      });
  },
  props: ['matchWinner', 'matchLoser', 'matchUrl'],

};
</script>
