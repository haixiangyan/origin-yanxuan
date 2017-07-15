<template>
  <div class="yan-good-footer">
    <!-- 联系店家 -->
    <router-link tag="div" to="/" class="yan-contact">
        <img src="/static/icons/service.png" alt="contact">
    </router-link>

    <!-- 立即购买 -->
    <router-link tag="div" to="/" class="yan-buy">
        立即购买
    </router-link>

    <!-- 加入购物车 -->
    <router-link tag="div" to="/" class="yan-add-cart">
        加入购物车
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.yan-good-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    border-top: 1px solid #666;
}

/* 联系商家 */
.yan-contact {
    padding: 30px 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #666;
    flex-grow: 1;
    background: #fff;
}

.yan-contact img {
    max-width: 70px;
}

.yan-buy,
.yan-add-cart {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
}

.yan-buy {
    background: #fff;
}

.yan-add-cart {
    background: rgb(180, 40, 45);
    color: #fff;
}
</style>
