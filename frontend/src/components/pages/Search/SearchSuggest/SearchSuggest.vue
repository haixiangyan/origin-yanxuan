<template>
  <div class="yan-search-suggest">
      {{suggest.title}}
  </div>
</template>

<script>
export default {
  props: ['suggest']
}
</script>

<style scoped>
.yan-search-suggest {
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(200, 200, 200);
}
</style>
