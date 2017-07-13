<template>
    <div class="yan-tabbar-wrapper">
        <!--tab bar 的子项-->
        <router-link v-for="(tab, index) in tabBarInfo" tag="div" 
            :to="tab.url" 
            :key="index" 
            :class="[{'tab-active':  selectedIndex === index}, 'yan-tabbar-item']">
            <i :class="tab.className" aria-hidden="true"></i>
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
                    className: 'fa fa-home fa-2x'
                },
                {
                    title: '专题',
                    url: '/home/topic',
                    className: 'fa fa-coffee fa-2x'
                },
                {
                    title: '分类',
                    url: '/',
                    className: 'fa fa-shopping-cart fa-2x'
                },
                {
                    title: '首页',
                    url: '/',
                    className: 'fa fa-lemon-o fa-2x'
                },
                {
                    title: '首页',
                    url: '/',
                    className: 'fa fa-user-o fa-2x'
                }
            ]
        }
    }
}
</script>

<style scoped>
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
