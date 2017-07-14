<template>
    <div class="yan-search-wrapper">
        <!-- 搜索框头部 -->
        <div class="yan-search-header">
            <!-- 搜索框 -->
            <yan-search-input v-on:getResult="getResult" class="yan-search-input"></yan-search-input>
            <!-- 取消按钮 -->
            <a @click.prevent="back" href="/">取消</a>
        </div>
    
        <!-- 热门的搜索 -->
        <div v-show="!showResult" class="yan-hot-search-wrapper">
            <yan-hot-search class="yan-hot-search"></yan-hot-search>
        </div>
    
        <!-- 搜索结果 -->
        <div v-show="showResult" class="yan-search-result-wrapper">
             <yan-search-result class="yan-search-result" v-for="(result, index) in searchResult" :key="index" :result="result"></yan-search-result> 
        </div>
    </div>
</template>

<script>
// 引入搜索框组件
import YanSearchInput from '@/components/pages/Search/SearchInput/SearchInput';
// 引入热门的搜索
import YanHotSearch from '@/components/pages/Search/HotSearch/HotSearch';
// 引入搜索结果
import YanSearchResult from '@/components/pages/Search/SearchResult/SearchResult';

export default {
    data() {
        return {
            searchResult: [],
            showResult: false
        }
    },
    methods: {
        getResult(result) {
            // 判断是否为空
            if (result.length === 0) {
                this.showResult = false;
            }
            else {
                this.searchResult = result;
                this.showResult = true;
            }
        },
        back() {
            this.$router.go(-1);
        }
    },
    components: {
        YanSearchInput,
        YanHotSearch,
        YanSearchResult
    }
}
</script>

<style scoped>
.yan-search-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f4f4f4;
}

/* 搜索框头部 */
.yan-search-header {
    padding: 15px 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    border-bottom: 1px solid rgb(200, 200, 200);
}

.yan-search-input {
    flex-grow: 1;
}

/* 热门搜索 */
.yan-hot-search {
    padding: 0 35px 30px;
}

/* 搜索结果 */
.yan-search-result-wrapper {
    padding-left: 35px;
    background: #fff;
}
</style>
