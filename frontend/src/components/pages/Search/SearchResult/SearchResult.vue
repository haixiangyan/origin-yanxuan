<template>
  <div class="yan-search-result">
      {{result.title}}
  </div>
</template>

<script>
export default {
  props: ['result']
}
</script>

<style scoped>
.yan-search-result {
  height: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(200, 200, 200);
}
</style>
