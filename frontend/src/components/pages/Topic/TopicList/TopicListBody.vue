<template>
	<div class="yan-topic-body">
		<a class="yan-topic-body-item" v-for="(item, index) in currentLoad" :key="index">
			<div class="yan-topic-body-item-header">
				<div class="yan-topic-body-item-header-writerImage">
					<img :src="item.writerImage" />
				</div>
				<div class="yan-topic-body-item-header-writer">{{item.writer}}</div>
			</div>
			<div class="yan-topic-body-item-img-container" >
				<div class="left" :style="{'background-image': `url(${item.picture[0]})`}">
				</div>
				<div class="right" v-if="item.picture.length>1">
					<div class="right-img" :style="{'background-image': `url(${item.picture[1]})`}">
					</div>
					<div class="right-img" :style="{'background-image': `url(${item.picture[2]})`}">
					</div>
				</div>
				<div class="i-icon">
					<span class="eye"></span>
					<span class="view-num">{{item.watchNumber}}</span>
				</div>
			</div>
			<div class="yan-topic-body-item-topic-info">
				<div class="title">
					<div>{{item.headline}}</div>
					<div class="price" v-if="item.picture[1]===''">
						<span>{{item.price}}</span>
						<span>元起</span>
					</div>
				</div>
				<div class="subtitle">{{item.content}}</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
    props: ['type'],
    data() {
		scroll:0;
        return {
            body_items: [],
			page: 0,
			currentLoad: [],
        }
    },
	methods: {
		getMoreItems(){
			let scrollHeight = document.body.scrollHeight;
			let currentHeight = document.body.scrollTop + document.documentElement.clientHeight;
			if(currentHeight >= scrollHeight-1){
				//加载更多的数据items
				setTimeout(()=>{
					if(this.currentLoad.length+4>this.body_items.length){
						this.currentLoad = this.currentLoad.concat(this.body_items.slice(this.page*4, this.body_items.length));
					}else{
						this.currentLoad = this.currentLoad.concat(this.body_items.slice(this.page*4,this.page*4 + 4));
						this.page++;
					}
				},1000);
			}
        },
        getTopicItemsFromServer(){
            this.$http({
                method: 'get',
                url: '/goods/topic'
            })
            .then((res) => {
                console.log('vue-resource then', res.body);
                this.$store.commit('initTopic', {
                    topic: res.body.data
                });
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });  
        }
	},
    mounted() {
        if(this.topic.length){
            getTopicItemsFromServer();
        }
        this.body_items = this.topic.filter(function(item){
            switch(this.type){
                case 0:
                    return item.writer === '丁磊';                
                break;
                case 1:
                    return item.writer === '丁磊';                
                break;
                case 2:
                    return item.writer === '丁磊';                
                break;
                case 3:
                    return item.writer === '丁磊';                
                break;
                default:
                break;
            }
        
        });
        if(this.body_items.length < 4){
            this.currentLoad = this.currentLoad.concat(this.body_items.slice(0,this.body_items.length));
        }else{
            this.currentLoad = this.currentLoad.concat(this.body_items.slice(0,4));
            this.page++;
        }
		// 
		window.addEventListener('scroll', this.getMoreItems);
	},
	computed:{
        topic() {
            return this.$store.getters.topic;
        }
    },
}


</script>

<style scoped>
div {
    font-size: 50px;
}
.yan-topic-body-item{
	display: block;
	margin-bottom: 30px;
	background-color: #fff;
}

.yan-topic-body-item-header{
	display: flex;
	flex-flow: row nowrap;
	justify-content: left;
	align-items: center;
	padding: 30px 40px;
}

.yan-topic-body-item-header-writerImage{
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 20px;
}
.yan-topic-body-item-header-writerImage img{
	display: block;
	width: 100%;
	height: 100%;
}


.yan-topic-body-item-header-writer{
	font-size: 36px;
	text-align: center;
}

.yan-topic-body-item-img-container{
	display: flex;
	justify-content: space-between;
	flex-flow: row nowrap;
	width: 100%;
	overflow: hidden;
	position: relative;
}


.yan-topic-body-item-img-container .left{
	flex: 2.6;
	height: 540px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 6px;;
}

.yan-topic-body-item-img-container .right{
	flex: 1;
	height: 540px;
	background-size: 100%;
	display: flex;
	flex-flow: column wrap;
}
.right .right-img{
	flex: 1;
	background-size: 100%;
	background-repeat: no-repeat;
}
.right .right-img:first-child{
	margin-bottom: 6px;
}

.yan-topic-body-item-img-container .i-icon{
	position: absolute;
	text-align: right;
	bottom: 0;
	right: 0;
	background: url(/static/img/topicImage/components/bg.png) no-repeat;
	background-size: cover;
	width: 120px;
	height: 50px;
	display: flex;
	justify-content: left;
	align-items: center;
	vertical-align: middle;
	/*align-items: center;*/
}
.i-icon .eye{
	/*flex: 1;*/
	width: 30px;
	height: 20px;
	background: url(/static/img/topicImage/components/eye.png) no-repeat;
	background-size: 100%;
}

 .i-icon .view-num{
	/*flex: 3;*/
	color: #fff;
	font-size: 26px;
}

.yan-topic-body-item-topic-info{
	overflow: hidden;
	padding: 40px 40px 80px;
}

.yan-topic-body-item-topic-info .title{
	font-size: 48px;
	color: #333;
	margin-bottom: 20px;
	display:flex;
	flex-flow: row nowrap;
	justify-content: space-between;
}

.title .price{
	color: #b4282d;
}

.yan-topic-body-item-topic-info .subtitle{
	font-size: 33px;
	color: #7f7f7f;
	line-height: 1.5;
}

</style>