<template>
    <div class="yan-home-wrapper">
        <!--搜索框头部-->
        <yan-search-header></yan-search-header>
    
        <!--商品的展示-->
        <mt-navbar class="yan-home-navbar" v-model="selected">
            <mt-tab-item v-for="(item, index) in catalog" :key="index" :id="index">
                {{item}}
            </mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                3
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
// 引入搜索框
import YanSearchHeader from '@/components/commons/SearchHeader/SearchHeader'

export default {
    data() {
        return {
            selected: 1,
            catalog: [
                '推荐',
                '居家',
                '餐厨',
                '配件',
                '服装',
                '洗护',
                '婴童',
                '杂货',
                '饮食',
                '志趣'
            ]
        }
    },
    components: {
        YanSearchHeader
    }
}
</script>

<style scoped>
/*导航条样式*/
.mint-tab-item-label {
    font-size: 35px;
}
</style>
