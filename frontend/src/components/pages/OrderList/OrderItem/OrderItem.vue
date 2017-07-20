<template>
    <div class="yan-order-list-item">
        <!-- 订单的头部 -->
        <div class="yan-order-item-header">
            <span>订单编号：{{orderItem.orderID}}</span>
        </div>

        <!-- 订单的内容 -->
        <router-link tag="div" :to="`/order-info/${orderItem.orderID}`" class="yan-order-content">
            <img 
                v-for="(good, index) in goodImages"
                :key="index"
                :src="good.picture" 
                alt="good">
        </router-link>

        <!-- 订单的功能 -->
        <div class="yan-order-func">
            <span v-if="orderItem.orderState + 1 === 1" class="yan-to-pay">去付款</span>
            <a :href="expressUrl" v-if="orderItem.orderState + 1 === 2" class="yan-check">查看物流</a>
            <span @click="confirmExpress" v-if="orderItem.orderState + 1 === 3" class="yan-confirm-order">确认收货</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['orderItem'],
    data() {
        return {
            expressUrl: `https://m.kuaidi100.com/index_all.html?type=yuantong&postid=810874175279&callbackurl=http://localhost:8080`
        }
    },
    computed: {
        goodImages() {
            return this.orderItem.goodsList.filter((good, index) => {
                return index < 4;
            })
        }
    },
    methods: {
        checkExpress() {
            this.$router.push(this.expressUrl);
        },
        confirmExpress() {
            this.$http({
                method: 'post',
                url: `/shop/confirmGoods`,
                body: JSON.stringify({
                    orderID: this.orderItem.orderID
                })
            })
                .then((res) => {
                    this.$router.go(0);
                })
                .catch((err) => {
                console.log('vue-resource err', err);
            });
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

/* 确认收货 */
.yan-order-func {
    border-top: 1px solid rgb(200, 200, 200);
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.yan-confirm-order{
    align-self: flex-end;
    padding: 17px 40px;
    border-radius: 50px;
    border: 2px solid rgb(180, 40, 45);
    font-size: 28px;
    color: rgb(180, 40, 45);
}

.yan-check {
    align-self: flex-end;
    padding: 17px 40px;
    border-radius: 50px;
    border: 2px solid rgb(200, 200, 200);
    font-size: 28px;
}

.yan-to-pay {
    align-self: flex-end;
    padding: 17px 40px;
    border-radius: 50px;
    border: 2px solid rgb(200, 200, 200);
    font-size: 28px;
}
</style>
