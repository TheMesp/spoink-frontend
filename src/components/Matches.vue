<template>
  <div>
    <p>Here's the most recent matches:</p>
    <hr>
    <div class="list-unstyled" v-for="match in matches.data" :key="match.id">
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
  name: 'MatchesComponent',
  data: () => ({
    error: '',
    matches: [],
  }),

  mounted() {
    backendGet('matches')
      .then((response) => response.json())
      .then((result) => {
        this.matches = result;
      });
  },
  methods: {},
  components: {
    MatchMinbox,
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
