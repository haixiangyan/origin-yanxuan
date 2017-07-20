<template>
    <div class="interest-body">
        <div class="interest-prompt">
            多选几个，小选会推荐得更准确哦！
        </div>
        <div class="interest-itemslist">
            <div class="interest-item" v-for="(item, index) in items" :key="index" v-on:click="selected(index)">
                <div class="interest-item-img">
                    <img :src="item.source" :alt="item.title">
                    <div class="selected" v-if="interestedList[index].interested">
                        <img src="/static/img/loginImage/selected.png" alt="">
                    </div>
                </div>
                <div class="interest-item-title">{{item.title}}</div>
            </div>
        </div>

        <div class="info-body-select">
            <router-link tag="div" :to="`/users/info/${id}`" class="info-body-select-cancle">
                取消
            </router-link>
            <div class="info-body-select-confirm" v-on:click="submit()">
                提交
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
            interestedList:[],
            items:[]
        }
    },
    methods:{
        selected(index){
            if(this.interestedList[index].interested){
                this.interestedList[index].interested = false;
            }else{
                this.interestedList[index].interested = true;
            }
        },
        submit(){
            //提交用户个人信息
            this.user.interest = [];
            this.interestedList.forEach(function(element){
                if(element.interested){
                    this.user.interest.push(element.title);
                }
            })
            let userForm = new FormData();
            userForm.append('telephone', this.user.telephone);
            userForm.append('address', this.user.address);
            userForm.append('interest', this.user.interest);
            userForm.append('name', this.user.name);
            userForm.append('gender', this.user.gender);
            if(this.user.photo == '/static/img/loginImage/userHeadPortrait/default.png'){
                userForm.append('photo', 
                    new File([""], ''));
            }else{
                userForm.append('photo', 
                    new File([""], this.user.photo));
            }
            console.log(userForm);
            this.$http({
                method: 'patch',
                url: '/users/changeInformation',
                body: userForm
            }).then(response => {
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
        },
        file(){
            return this.$store.getters.file;
        },
        historyFile(){
            return this.$store.getters.historyFile;
        }
    },
    mounted(){
        this.items.push(
            {
                title:'床品被枕',
                source:'/static/img/loginImage/interest/床品被枕.png'
            }, 
            {
                title:'餐厨用品',
                source:'/static/img/loginImage/interest/餐厨用品.png'
            },
            {
                title:'居家神器',
                source:'/static/img/loginImage/interest/居家神器.png'
            },
            {
                title:'家居家饰',
                source:'/static/img/loginImage/interest/家居家饰.png'
            },
            {
                title:'鞋靴外搭',
                source:'/static/img/loginImage/interest/鞋靴外搭.png'
            },
            {
                title:'内衣裤袜',
                source:'/static/img/loginImage/interest/内衣裤袜.png'
            },
            {
                title:'箱包差旅',
                source:'/static/img/loginImage/interest/箱包差旅.png'
            },
            {
                title:'洗护用品',
                source:'/static/img/loginImage/interest/洗护用品.png'
            },
            {
                title:'办公文具',
                source:'/static/img/loginImage/interest/办公文具.png'
            },
            {
                title:'茶点零食',
                source:'/static/img/loginImage/interest/茶点零食.png'
            },
            {
                title:'宠物用品',
                source:'/static/img/loginImage/interest/宠物用品.png'
            },
            {
                title:'运动音乐',
                source:'/static/img/loginImage/interest/运动音乐.png'
            },
            {
                title:'母婴用品',
                source:'/static/img/loginImage/interest/母婴用品.png'
            },
            {
                title:'车载用品',
                source:'/static/img/loginImage/interest/车载用品.png'
            },
            {
                title:'智能硬件',
                source:'/static/img/loginImage/interest/智能硬件.png'
            });
        this.items.forEach(function(element) {
            this.interestedList.push({
                title: element.title,
                interested: this.user.interest.includes(element.title)
            });
            
        }, this);
        console.log(this.historyFile);
        //错误关闭会导致信息页面显示不正确.
    }
}
</script>

<style scoped>
.interest-body{
    background-color: white;
}
.interest-prompt{
    height: 150px;
    width: 100%;
    font-size: 36px;
    line-height: 150px;
    text-align: center;
}

.interest-itemslist{
    margin-bottom: 150px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}

.interest-item{
    width: 28%;
    height: 400px;
    margin-left: 40px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.interest-item-img{
    position: relative;
    width: 100%;
    height: 274px;
}
.interest-item-img img{
    width: 100%;
    height: 100%;
}

.interest-item-title{
    font-size: 32px;
    height: 100px;
    line-height: 100px;
}

.info-body-select{
    position: fixed;
    bottom: 0;
    background-color: white;
    height: 140px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
}

.info-body-select div{
    flex: 1;
    text-align: center;
    font-size: 38px;
    line-height: 140px;
}

.info-body-select .info-body-select-confirm{
    background-color: #b4282d;
    color: white;
}

.interest-item-img .selected{
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

.interest-item-img .selected img{
    height: 85px;
    width: 85px;
}
</style>