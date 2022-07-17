<template>
  <div class="home">
    <Matches />
  </div>
</template>

<script>
// @ is an alias to /src
import Matches from '@/components/Matches.vue';

export default {
  name: 'MatchesView',
  components: {
    Matches,
  },
};
</script>
