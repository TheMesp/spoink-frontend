<template>
    <div style='border: 1px solid black; width: 150px; padding: 5px; margin: 5px;'>
        <img style='float: left;' :src="playerProfileUrl" alt='huh' />
        <router-link :to="{ name: 'player', params: {playerid: playerId} }">
          <p>{{ playerName }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
  props: ['playerName', 'playerProfileUrl', 'playerId'],
};
</script>
