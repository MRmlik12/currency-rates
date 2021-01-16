<template>
  <area-chart :data="this.options"></area-chart>
</template>

<script>

export default {
  name: 'Chart',
  props: ['options'],
  components: {

  },
};
</script>

<style scoped>
</style>
