<template>
    <div class="yan-home-catalog-wrapper">
        <!--商品分类的头部-->
        <div class="yan-catalog-header">
            <!--分类的标题-->
            <div class="yan-title">{{catalog.title}}</div>
    
            <!--分类的副标题-->
            <div v-if="catalog.title" class="yan-subtitle">{{catalog.subtitle}}</div>
        </div>
        
        <div class="yan-catalog-goods">
            <yan-catalog-good class="yan-catalog-good" v-for="(good, index) in catalog.data" :key="index" :good="good"></yan-catalog-good>            
            <yan-catalog-more :title="catalog.title" :index="index"></yan-catalog-more>
        </div>
    </div>
</template>

<script>
// 引入商品的组件
import YanCatalogGood from '@/components/pages/Home/Catalog/Good/Good';
// 引入查看更多商品的组件
import YanCatalogMore from '@/components/pages/Home/Catalog/More/More';

export default {
    props: ['catalog', 'index'],
    components: {
        YanCatalogGood,
        YanCatalogMore
    }
}
</script>

<style scoped>
.yan-home-catalog-wrapper {
    background: #fff;
}

/*标题*/
.yan-catalog-header {
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.yan-title,
.yan-subtitle {
    text-align: center;
}

.yan-title {
    margin-bottom: 15px;    
    font-size: 40px;
}

.yan-subtitle {
    color: rgb(153, 153, 153);
}

/*商品*/
.yan-catalog-goods {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.yan-catalog-good {
    padding: 0 10px 50px;
}
</style>
