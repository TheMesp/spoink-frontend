<template>
  <div style='border: 1px solid black; width: 150px; padding: 5px; margin: 5px;'>
    <p>Team {{ teamName }}</p>
    <div class="list-unstyled" v-for="pokemon in teamData" :key="pokemon.id">
      <p>{{ pokemon.name }}</p>
      <PokemonIcon
        :pokemon-id="pokemon.id"
        :pokemon-name="pokemon.name"
      />
    </div>
  </div>
</template>

<script>

import PokemonIcon from '@/components/PokemonIcon.vue';
import { backendGet } from '../helpers';

export default {
  props: ['teamId', 'teamName'],

  data() {
    return {
      teamData: [],
    };
  },

  created() {
    backendGet(`teams/${this.$props.teamId}/pokemon`)
      .then((response) => response.json())
      .then((result) => {
        this.teamData = result.data;
      });
  },

  components: {
    PokemonIcon,
  },

};
</script>
