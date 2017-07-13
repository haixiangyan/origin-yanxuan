<template>
  <div class="yan-category-content">
      <div class="yan-category-img">
        <img src="" alt="">
        {{category.name}}
      </div>
  </div>
</template>

<script>
export default {
    props: ['category'],
    mounted() {
      console.log(this.category)
    }
}
</script>

<style scoped>
.yan-category-content {
    width: 80%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
