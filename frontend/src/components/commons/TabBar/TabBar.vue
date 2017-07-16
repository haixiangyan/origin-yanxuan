<template>
    <div class="yan-tabbar-wrapper">
        <!--tab bar 的子项-->
        <router-link v-for="(tab, index) in tabBarInfo" tag="div" 
            :to="tab.url" 
            :key="index" 
            :class="[{'tab-active':  selectedIndex === index}, 'yan-tabbar-item']">
            <img :src="selectedIndex === index ? tab.activeImg : tab.img" alt="tab">
            <div>{{tab.title}}</div>
        </router-link>    
    </div>
</template>

<script>

export default {
    props: ['selectedIndex'],
    data() {
        return {
            tabBarInfo: [
                {
                    title: '首页',
                    url: '/',
                    className: 'fa fa-home fa-2x',
                    img: '/static/icons/home.png',
                    activeImg: '/static/icons/active-home.png'
                },
                {
                    title: '专题',
                    url: '/topic',
                    className: 'fa fa-dribbble fa-2x',
                    img: '/static/icons/topic.png',
                    activeImg: '/static/icons/active-topic.png'
                },
                {
                    title: '分类',
                    url: '/category',
                    className: 'fa fa-th-large fa-2x',
                    img: '/static/icons/category.png',
                    activeImg: '/static/icons/active-category.png'
                },
                {
                    title: '购物车',
                    url: '/',
                    className: 'fa fa-shopping-cart fa-2x',
                    img: '/static/icons/cart.png',
                    activeImg: '/static/icons/active-cart.png'
                },
                {
                    title: '个人',
                    url: '/',
                    className: 'fa fa-user-o fa-2x',
                    img: '/static/icons/user.png',
                    activeImg: '/static/icons/active-user.png'
                }
            ]
        }
    }
}
</script>

<style scoped>
img {
    max-width: 60px;
}

.yan-tabbar-wrapper {
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    border-top: 1px solid rgb(217, 217, 217);
}

/*tab bar 的子项*/
.yan-tabbar-item {
    text-align: center;
}

.yan-tabbar-item div {
    font-size: 30px;
}

.yan-tabbar-item i,
.yan-tabbar-item div {
    color: rgb(150, 150, 150);
}

/*激活的子项*/
.tab-active i {
    color: rgb(180, 40, 45);
}

.tab-active div {
    color: rgb(180, 40, 45);
}
</style>
