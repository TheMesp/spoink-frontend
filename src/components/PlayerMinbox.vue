<template>
    <div style='border: 1px solid black; width: 150px; padding: 5px; margin: 5px;'>
        <img style='float: left;' :src="playerProfileUrl" alt='huh' />
        <p>{{ playerName }}</p>
    </div>
</template>

<script>
export default {
  props: ['playerName', 'playerProfileUrl'],
};
</script>
