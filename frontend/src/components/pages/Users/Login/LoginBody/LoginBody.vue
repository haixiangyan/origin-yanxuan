<template>
    <div class="yan-login-body-wrapper">
        <form class="yan-login-body-form">
            <div class="form-item">
                <input v-model="form.name" placeholder="手机号" size="large"></input>
            </div>
            <div class="form-item">
                <input type="password" v-model="form.password" placeholder="请输入密码" size="large"></input>
            </div>

        </form>

        <div class="form-item" >
            <button v-on:click="onSubmit">登陆</button>
        </div>
        <div class="auxiliary form-item" >
            <div class="register">
                <a href='/register'>注册账号</a>
            </div>
            <div class="forgetPw">
                <a>忘记密码</a>
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
                password:''
            },
            status: '',
            errorMeg :'',
            user: {}
        }
    },
    methods:{
        onSubmit(){
            
            if(this.form.password != '' && this.form.password){
                console.log('password');
                // POST /
                this.$http.post('/users/login',
                    {
                        email: this.form.name,
                        password: this.form.password
                    }
                ).then(response => {
                    console.log('vue-resource then', response.body);
                    this.status = response.body.result;
                    if(this.status === 'success'){
                        this.user = response.body.user;
                        
                    }
                }, response => {
                    // error callback
                    console.log('vue-resource err', response.err);
                });
            }
        }
                    
    }
}
</script>

<style scoped>


.yan-login-body-wrapper{
    margin: 0 auto;
    width: 90%;
    height: 500px;
    padding: 180px 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    color: rgb(155, 155, 155);
}

.yan-login-body-form{
    flex: 1;
    /*width: 100%;*/
    height: 300x;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}

.form-item{
    height: 100px;
    display: flex;
    
    justify-content: center;
    flex-flow: column nowrap;
    border-bottom : 2px solid #d9d9d9;
    border-radius: 15px;
    overflow: hidden;
    font-size: 32px;
}

form .form-item{
    margin-bottom: 40px;
}

input::-webkit-input-placeholder{
    color:#666;
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
    /*-webkit-tap-highlight-color: rgba(255,255,255,0);*/
}

.form-item input:focus{
    outline: none;
}

.form-item button{
    height: 100%;
    width: 100%;
    background: #b7272d;
    font-size: 32px;
    color: white;
    border:none;
}

.auxiliary{
    height: 100px;
    margin: 0 1%;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: flex-end;
    border: none;
    border-radius: 0px;
    font-size: 36px;
    color: #7f7f7f;
}

a{
    color:#666;
    outline: none;
    text-decoration: none;
}


</style>