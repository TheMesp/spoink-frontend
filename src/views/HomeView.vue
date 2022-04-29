<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/spoink.png">
    <HelloWorld msg="Welcome to Spoinkbot v0.0.0.0.1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
