<template>
  <div class="yan-cart-header">
    <span class="title">购物车</span>

     <span class="edit">编辑</span> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.yan-cart-header {
    padding: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    border-bottom: 1px solid rgb(200, 200, 200);
    background: #fff;
    z-index: 5;
}

.title {
    font-size: 50px;
}

.edit {
    position: absolute;
    right: 35px;
    font-size: 40px;
}
</style>
