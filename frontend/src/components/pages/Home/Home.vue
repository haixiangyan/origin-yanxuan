<template>
    <div class="yan-home-wrapper">
        <!--搜索框头部-->
        <yan-search-header></yan-search-header>
    
        <!--导航栏-->
        <yan-navbar></yan-navbar>
    
    </div>
</template>

<script>
// 引入搜索框
import YanSearchHeader from '@/components/commons/SearchHeader/SearchHeader';
// 引入导航栏
import YanNavbar from '@/components/pages/Home/Navbar/Navbar';
// 引入推荐内容
import YanRecommend from '@/components/pages/Home/Recommend/Recommend';

export default {
    data() {
        return {
        }
    },
    components: {
        YanSearchHeader,
        YanNavbar,
        YanRecommend,
    }
}
</script>

<style scoped>

</style>
