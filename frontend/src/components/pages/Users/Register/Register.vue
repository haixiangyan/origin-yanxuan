<template>
    <div class="yan-register-wrapper">
        <div class="yan-register-body">
            <form class="yan-register-body-form">
                <div class="form-item">
                    <input v-model="form.name" placeholder="请输入手机号" size="large"></input>
                </div>
                <div class="form-item">
                    <input type="password" v-model="form.password" placeholder="请输入密码" size="large"></input>
                </div>
                <div class="form-item">
                    <input type="password" v-model="form.confirm" placeholder="请确认密码" size="large"></input>
                </div>
            </form>
            <div class="form-submit" >
                <button v-on:click="onSubmit">下一步</button>
            </div>
            <div class="tips">
                用户注册即代表同意
                <a href="//reg.163.com/agreement_wap.shtml?20160825">《服务条款》</a>
                和
                <a href="//reg.163.com/agreement_game_wap.shtml?20160825">《网络游戏用户隐私保护和个人信息利用政策》</a>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            form:{
                name:'',
                password: '',
                confirm:''
            }
        }
    },
    methods:{
        regist(){
                console.log('password');
                  // POST /
                this.$http.post('/users/register',
                    {
                        telephone: this.form.name,
                        password: this.form.password
                    }
                ).then(response => {
                    console.log('vue-resource then', response.body);
                    let result = response.body.result;
                    if(result === 'success'){
                        this.$router.push({name: 'Login'});
                    }

                }, response => {
                    // error callback
                    console.log('vue-resource err', response.err);
                });
        },

        onSubmit(){
            if(this.form.password !== this.form.confirm){
                //页面跳出一个提示显示 “请确认密码”
                console.log('请确认密码');
            }else{
                this.regist();
            }
        }
        
    },
}
</script>

<style scoped>

.yan-register-body{
    margin: 0 auto;
    width: 86%;
    padding: 100px 0 100px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    color: rgb(155, 155, 155);
}

.yan-register-body-form{
    flex: 1;
    /*width: 100%;*/
    height: 450px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
}

.form-item{
    height: 100px;
    display: flex;
    justify-content: center;
    border: 2px solid #d9d9d9;
    border-radius: 15px;
    overflow: hidden;
    font-size: 32px;
    
}

input::-webkit-input-placeholder{
    color:rgb(155, 155, 155);
    opacity:1;
}

.form-item input{
    height: 100%;
    color: #333;
    width: 100%;
    font-size: 35px;
    text-indent: 40px;
    border: none;
    background: none;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}

.form-submit{
    margin-top: 20px;
    overflow: hidden;
}

.form-submit button{
    height: 120px;
    width: 100%; 
    background: #b7272d;
    font-size: 32px;
    color: white;
    border:none;
    border-radius: 15px;
}

.form-item input:focus{
    outline: none;
}

a{
    color:#0095ff;
    outline: none;
    text-decoration: none;
}

.tips{
    width: 100%;
    margin: 30px 0 30px;
    font-size: 32px;
    line-height: 50px;
}
</style>