<template>
  <div @click="selectAddress" class="yan-address-item">

    <!-- 地址的内容 -->
    <div class="yan-addresss-content">
      <!-- 名字 -->
      <div class="yan-user-name">
        <div class="user-name">{{address.receiver}}</div>
        <div v-if="address.isDefault" class="default-address">默认</div>
      </div>
  
      <!-- 用户的其他信息（地址，电话） -->
      <div class="yan-user-spec">
        <div class="user-tel">{{address.telephone}}</div>
        <div class="user-address">{{address.detail}}</div>
      </div>
    </div>

    <!-- 编辑 -->
    <div @click.stop="toEditAddress" class="yan-address-more">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['address'],
  methods: {
    selectAddress() {
      // 改变收件的地址
      this.$store.commit('selectAddress', {
        address: this.address
      });

      // 返回到购物车的页面
      this.$router.push('/order');
    },
    toEditAddress() {
      // 开启编辑状态
      this.$store.commit('trickEditState');
      this.$store.commit('getEditAddress', {
          editAddress: this.address
      })

      this.$router.push('/address-form');
    }
  }
}
</script>

<style scoped>
.yan-address-item {
  padding: 45px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(200, 200, 200);
}

/* 地址的内容 */
.yan-address-content {
  display: flex;
  align-items: center;
}

.yan-user-name {
  display: inline-flex;
  flex-direction: column;
}

.yan-user-spec {
  display: inline-flex;
  padding-left: 35px;  
  flex-direction: column;
}

/* 用户的名字 */
.user-name {
  margin-bottom: 15px;
}

/* 默认的地址 */
.default-address {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  font-size: 24px;
  color: rgb(180, 40, 45);
  border: 3px solid rgb(180, 40, 45);
  border-radius: 6px;
}

/* 电话 */
.user-tel {
  margin-bottom: 15px;
}

/* 用户的地址 */
.user-address {
  color: rgb(102, 102, 102);
  font-size: 32px;
}

/* 更多地址 */
.yan-address-more {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.yan-address-more img {
  width: 60px;
}
</style>
