<template>
  <div>
    {{msg}}
    <li v-for="(topic, index) in topics" :key="index">{{topic.name}}</li>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Topic body',
            topics: []
        }
    },
    mounted() {
        // 发送请求，获取数据
      this.$http({
        method: 'get',
        url: '/test'
      })
        .then((res) => {
          console.log('vue-resource then', res.body);
          this.topics = res.body.goods;
        })
        .catch((err) => {
          console.log('vue-resource err', err);
        });
    }
}
</script>

<style scoped>
div {
    font-size: 50px;
}
</style>
