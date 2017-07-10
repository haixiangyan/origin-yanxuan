<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  
    <mt-button type="default" @click="send">发送一个请求</mt-button>
  
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
  
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" ></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" ></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" ></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  
    <h1 class="animated infinite bounce">Example</h1>
  </div>
</template>

<script>

// 引入 vuex  的 mapActions 和 mapMutations
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 1
    }
  },
  methods: {
    send() {
      // 测试发送请求
      this.$http.post('/test', {
        name: 'haha'
      })
        .then((res) => {
          console.log('vue-resource then', res);

          // 测试 vuex
          this.$store.dispatch('getCart', {
            cart: [
              {
                name: 'beer',
                price: '12',
              },
              {
                name: 'wine',
                price: '13',
              },
              {
                name: 'egg',
                price: '12',
              },
            ]
          });
        })
        .catch((err) => {
          console.log('vue-resource err', err);
        });

      // 测试发送请求
      this.$http({
        method: 'post',
        url: `${this.$myhost}/first`
      })
        .then((res) => {
          console.log('vue-resource then', res.body);
        })
        .catch((err) => {
          console.log('vue-resource err', err);
        });

    },
    ...mapMutations({
      edit: 'editCart'
    }),
    ...mapActions({
      get: 'getCart'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
