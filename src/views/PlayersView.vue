<template>
  <div class="home">
    <Players />
  </div>
</template>

<script>
// @ is an alias to /src
import Players from '@/components/Players.vue';

export default {
  name: 'PlayersView',
  components: {
    Players,
  },
};
</script>
