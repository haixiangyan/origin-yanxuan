<template>
    <router-link tag="div" :to="`/order-info/${orderItem.orderID}`" class="yan-order-list-item">
        <!-- 订单的头部 -->
        <div class="yan-order-item-header">
            <span>订单编号：{{orderItem.orderID}}</span>
        </div>

        <!-- 订单的内容 -->
        <div class="yan-order-content">
            <img 
                v-for="(good, index) in goodImages"
                :key="index"
                :src="good.picture" 
                alt="good">
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['orderItem'],
    computed: {
        goodImages() {
            return this.orderItem.goodsList.filter((good, index) => {
                return index < 4;
            })
        }
    }
}
</script>

<style scoped>
.yan-order-list-item {
    background: #fff;
    padding-left: 35px;
}

/* 头部 */
.yan-order-item-header {
    padding: 35px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
}

/* 订单的内容 */
.yan-order-content {
    display: flex;
    align-items: center;
    padding: 35px 0;
}

.yan-order-content img {
    margin-right: 35px;
    background: #f4f4f4;
    width: 190px;
}
</style>
