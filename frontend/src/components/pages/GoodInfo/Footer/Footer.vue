<template>
  <div class="yan-good-footer">
    <!-- 联系店家 -->
    <router-link tag="div" to="/" class="yan-contact">
         <img v-if="!isBack" src="/static/icons/service.png" alt="contact">  
         <span @click="back" v-if="isBack">返回</span> 
    </router-link>

    <!-- 立即购买 -->
    <router-link tag="div" to="/" class="yan-buy">
        立即购买
    </router-link>

    <!-- 加入购物车 -->
    <div @click.prevent="addToCart"  class="yan-add-cart">
        加入购物车
    </div>
  </div>
</template>

<script>
export default {
    props: ['isBack'],
    computed: {
        goodInfo() {
            return this.$store.getters.good;
        },
        selection() {
            return this.$store.getters.selection;
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        addToCart() {
            // 将商品加入购物车
            console.log('id', this.$route.params.goodId);
            console.log('type', this.goodInfo.type[this.selection.type]);
            console.log('num', this.selection.num);
            
            this.$store.commit('addToCart', {
                cartItem: {
                    id: this.$route.params.goodId,
                    number: this.selection.num,
                    type: this.goodInfo.type[this.selection.type]
                }
            });
        }
    }
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
    line-height: 70px;
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
