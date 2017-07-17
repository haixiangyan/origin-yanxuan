<template>
    <div class="yan-cart">
        <!-- 头部 -->
        <yan-cart-header></yan-cart-header>

        <!-- 购物车的子项 -->
        <yan-cart-item v-for="(cartItem, index) in cartItems" :index="index" :key="index" :cartItem="cartItem"></yan-cart-item>

        <!-- tab bar -->
        <yan-tab-bar :selectedIndex="3"></yan-tab-bar>
    </div>
</template>

<script>
// 引入购物车的头部组件
import YanCartHeader from '@/components/pages/Cart/Header/Header';
// 引入购物车的 item
import YanCartItem from '@/components/pages/Cart/CartItem/CartItem';
// 引入 TabBar 组件
import YanTabBar from '@/components/commons/TabBar/TabBar';

export default {
    data() {
        return {
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        }
    },
    components: {
        YanCartHeader,
        YanCartItem,
        YanTabBar
    },
    mounted() {
        // 发送请求，获取商品的专题精选
        this.$http({
            method: 'get',
            url: `/shop/cart/1`
        })
            .then((res) => {
                // 初始化购物车的商品
                res.body.data.forEach((element) => {
                    element.select = 1;
                });

                // 将商品的购物车存到 vuex 中
                this.$store.commit('initCart', {
                    cart: res.body.data
                });
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>
.yan-cart {
    margin-top: 112px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    background: #f4f4f4; 
} 
</style>
