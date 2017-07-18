<template>
    <div class="yan-usercenter-body">
        <div class="yan-usercenter-body-wrapper" >
            <div class="entry-item" v-for="(item, index) in items" :key="index">
                <div :style="{'background-image': `url(${bgImage})`,'background-position-y': `${item.bgposy}`}"></div>
                <span class="txt">{{item.txt}}</span>
            </div>
        </div>
        <div class="yan-usercenter-body-footer">
            <button>退出登录</button>
        </div>
    </div>
</template>
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return {
            bgImage: '/static/img/loginImage/itemsBgImage.png',
            items:[
                {
                    txt:"我的订单",
                    bgposy :"-620px"
                },
                {
                    txt:"周六一起拼",
                    bgposy :"-765px"
                },
                {
                    txt:"售后服务",
                    bgposy :"-65px"
                },
                {
                    txt:"优惠券",
                    bgposy :"-145px"
                },
                {
                    txt:"优先购",
                    bgposy :"-845px"
                },
                {
                    txt:"礼品卡",
                    bgposy :"-305px"
                },
                {
                    txt:"会员福利",
                    bgposy :"-700px"
                },
                {
                    txt:"地址管理",
                    bgposy :"10px"
                },
                {
                    txt:"帐号安全",
                    bgposy :"-930px"
                },
                {
                    txt:"联系客服",
                    bgposy :"-460px"
                },
                {
                    txt:"帮助中心",
                    bgposy :"-380px"
                },
                {
                    txt:"意见反馈",
                    bgposy :"-225px"
                }
            ]
        }
    },
    methods:{
                   
    },
    mounted(){
    }
}
</script>

<style scoped>
.yan-usercenter-body{
    background-color: #f4f4f4;
    height: 100%;
}

.yan-usercenter-body-wrapper{
    height: 960px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    background-color: white;
    /* align-items: center; */
}

.entry-item{
    width: 33.2%;
    height: 220px;
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.entry-item:nth-of-type(3n){
    border-right: 0;
}

.entry-item div{
    width: 66px;
    height: 80px;
    margin-bottom: 15px;
    /* background-position: 0 -620px; */
     background-position-x: 0;
    background-repeat: no-repeat;
    background-size: 66px 1000px;
}

.entry-item span{
    font-size: 31px;
    color: #333;
}

.yan-usercenter-body-footer{
    margin-top: 50px;
    height: 100px;
    width: 100%;
}

.yan-usercenter-body-footer button{
    width: 100%;
    height: 100%;
    background-color: white;
    font-size: 36px;
    border: 0;
}

</style>