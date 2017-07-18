<template>
    <div class="info-body">
        <div class="img">
            <img :src="mountedUser.photo" alt="">
        </div>
        <ul>
            <li class="list-item">
                <span>用户ID</span>
                <span>{{mountedUser.telephone}}</span>
            </li>
            <li class="list-item">
                <span>昵称</span>
                <input type="text" :value="mountedUser.name" v-model="mountedUser.name">
            </li>
            <li class="list-item">
                <span>性别</span>
                <div class="list-item-sex">
                    <input type="radio" name="sex" value="man" v-model="mountedUser.gender" v-if="mountedUser.gender==='man'" checked>
                    <input type="radio" name="sex" value="man" v-model="mountedUser.gender" v-else>
                    <label for="man">男</label>
                    <input type="radio" name="sex" value="woman" v-model="mountedUser.gender" v-if="mountedUser.gender==='woman'" checked>
                    <input type="radio" name="sex" value="woman" v-model="mountedUser.gender" v-else>
                    <label for="woman">女</label>
                </div>
            </li>
            <li class="list-item">
                <span>地址</span>
                <input type="text" :value="mountedUser.address[0].address" v-model="mountedUser.address[0].address">
            </li>
        </ul>

        <router-link tag="div" :to="`/users/interestCategory/${id}`" class="info-body-li">
            <div class="info-body-li-left">
                <span>感兴趣的分类</span>
            </div>
            <div class="info-body-li-right">
                <div><img class="render" src="/static/img/loginImage/render.png" alt=""></div>
            </div>
        </router-link >

        <div class="info-body-select">
            <div class="info-body-select-cancle">
                取消
            </div>
            <div class="info-body-select-confirm" v-on:click="submit()">
                保存
            </div>
        </div>
    </div>
</template> 
<script>

//<router-link tag="" to="/hom"></router-link>
export default {
    props: ['id'],
    data() {
        return{
            mountedUser : {
                "_id": "",
                "telephone": "",
                "password": "",
                "__v": 0,
                "address": [{ name: "", telephone: "", address: "" }],
                "interest": [""],
                "name": '',
                "gender": "",
                "photo": ""
            }
        }
    },
    methods:{
        submit(){
            console.log(this.mountedUser);
            this.$http.patch('/users/changeInformation', this.mountedUser).then(response => {
                console.log('vue-resource then', response.body);
                this.status = response.body.result;
                if(this.status === 'success'){
                    //this.$router.push({name: 'User Center', params: { userId: response.body.user.telephone }})

                }
            }, response => {
                // error callback
                console.log('vue-resource err', response.err);
            });
        }
    },
    computed:{
        user() {
            return this.$store.getters.user;
        }
    },
    mounted(){
        this.mountedUser = this.user;
        console.log('info page',this.mountedUser);
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
    height: 400px;
    background-color: white;
}

.info-body .img img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
}

ul{
    background-color: white;
}

ul li{
    font-size: 38px;
    border-bottom: 1px solid #d9d9d9;
    padding-left: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    min-height: 150px;
}

ul li span,input[type="text"]{
    display: block;
    height: 150px;
    /* text-align: center; */
    line-height: 150px;
}

ul li span:first-child{
    flex: 1;
    /* width: 200px; */
}
ul li span:last-child{
    flex: 3;
    color: #7f7f7f;
}
ul li input[type="text"]{
    flex: 3;
    color: #7f7f7f;
    border: none;
    font-size: 38px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    /* user-select: text; */
    /* cursor: auto; */
}
input:focus {
    outline:none;
}

ul li .list-item-sex{
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row nowrap;
}

ul li input[type="radio"]{
    width: 50px;
    height: 50px;
    display: block;
    margin-right: 25px;
}

ul li label[for="male"]{
    margin-right: 200px;
}

.info-body-li{
    background-color: white;
    height: 150px;
    margin-top: 50px;
    width: 90%;
    padding: 0 5% 0 5%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.info-body-li .info-body-li-left{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

 .info-body-li-left span{
    font-size: 38px;
    color: #333;;
} 
.info-body-li .info-body-li-right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    width: 220px;
}

.info-body-li-right img.render{
    width: 60px;
    height: 60px;
}
.info-body-select{
    background-color: white;
    height: 150px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
}

.info-body-select div{
    flex: 1;
    text-align: center;
    font-size: 38px;
    line-height: 150px;
}

/* .info-body-select .info-body-select-cancel{
    color: white;
} */

.info-body-select .info-body-select-confirm{
    background-color: #b4282d;
    color: white;
}
</style>