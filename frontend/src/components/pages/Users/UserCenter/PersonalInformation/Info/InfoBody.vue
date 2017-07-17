<template>
    <div class="info-body">
        <div class="img">
            <img :src="user.photo" alt="">
        </div>
        <ul>
            <li class="list-item">
                <span>用户ID</span>
                <span>{{user.userId}}</span>
            </li>
            <li class="list-item">
                <span>昵称</span>
                <span>{{user.name}}</span>
            </li>
            <li class="list-item">
                <span>性别</span>
                <span>{{user.gender}}</span>
            </li>
            <li class="list-item">
                <span>地址</span>
                <span>{{user.address}}</span>
            </li>
            <li class="list-item"></li>
        </ul>
    </div>
</template> 
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return{
            user:{
                photo: '/static/img/loginImage/userHeadPortrait/info-img.png',
                userId: 0,
                name: '',
                gender: '',
                address: ''
            }
        }
    },
    methods:{
    },
    mounted(){
        this.$http({
            method: 'get',
            url: '/users/'+this.userId+'/getUserDetailInfo'
        })
        .then((res) => {
            console.log('vue-resource then', res.body);
            this.user = res.body.user;
        })
        .catch((err) => {
            console.log('vue-resource err', err);
        });
    }
}
</script>

<style scoped>
.info-body .img{
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: white;
}

.info-body .img img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
}
</style>