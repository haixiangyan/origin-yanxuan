<template>
    <div class="yan-topic">
		<div class="yan-topic-header">  
			<li class="yan-topin-header-box" v-for="(item, index) in header_items" :key="index" :style="{'background-image': `url(${item.img_url})`}">
				<span class="yan-topic-header-title"> 
					{{item.item_name}}
				</span>
			</li>
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Topic Header',
            header_items: []
        }
    },
    mounted() {
        // 发送请求，获取数据
      this.$http({
        method: 'get',
        url: '/topic-header-items'
      })
        .then((res) => {
          console.log('vue-resource then', res.body);
          this.header_items = res.body.items;
        })
        .catch((err) => {
          console.log('vue-resource err', err);
        });
    }
}
</script>

<style scoped>
li{
	list-style: none;
}

.yan-topic{
	overflow: hidden;
	margin-bottom: 30px;
	background-color: #fff;
}
.yan-topic-header {
	padding: 20px 30px;
	overflow: auto;
    font-size: 35px;
	display: flex;
	justify-content: left;	
	align-items: center;
	flex-flow: row nowrap;
}
.yan-topin-header-box {
	/*position: relative;*/
	flex-shrink: 0;
	display: flex;
	align-items: center;
	margin-right: 25px;
	background-size: 100% 100%;
	border-radius: 10px;
	width: 350px;
	height: 200px;
}

.yan-topic-header-title{
	color: whitesmoke;
	text-align: center;
	flex: 1;
	/*position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 170px;*/
}

</style>

