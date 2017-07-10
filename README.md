# YanXuan

本项目是模访网易严选网上商城来编写的。项目前端技术基于 Vue.js 单页应用的框架，移动框架用的是 Mint UI 框架。后端持术是基于 Express 4.x 框架。

## 项目目录

```
├── README.md
├── backend // 后端代码
│   ├── app.js // express 配置
│   ├── bin
│   ├── node_modules
│   ├── package.json
│   ├── public
│   ├── routes // 路由配置
│   └── views
└── frontend // 前端代码
    ├── README.md
    ├── build // webpack 购建目录
    ├── config // webpack 配置目录
    ├── index.html
    ├── node_modules // node 模块
    ├── package.json
    ├── src // 组件源码
    └── static // 静态资源
```

## 如何运行

#### 后台

```
$ cd backend  // 进入后端目录

$ npm install // 安装依赖

$ npm start   // 开启服务器
```

#### 前台

```
$ cd frontend // 进入后端目录

$ npm install // 安装依赖

$ npm run dev // 开启服务器
```

## 参考资料

#### Vue.js

- [Vue.js 官方文档](https://cn.vuejs.org/v2/guide/)

- [Vuex 官方文档](https://vuex.vuejs.org/zh-cn/)

- [Vue Router 官方文档](https://router.vuejs.org/zh-cn/)

- [Vue-Resource 官方文档](https://github.com/pagekit/vue-resource)

#### Mint UI

- [Mint UI 官方文档](http://mint-ui.github.io/docs/#/zh-cn2)

#### Express.js

- [Express.js](http://www.expressjs.com.cn/)

#### Mongoose.js

- [Mongoose.js](http://mongoosejs.com/)
