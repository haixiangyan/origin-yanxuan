<template>
    <div class="yan-usercenter-info">
        <yan-user-center-info-body :id="id"></yan-user-center-info-body>
    </div>
</template>
<script>

import YanUserCenterInfoBody from '@/components/pages/Users/UserCenter/PersonalInformation/Info/InfoBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components:{
        YanUserCenterInfoBody
    },
    mounted() {
        console.log(this.id);
    },
    beforeRouteLeave (to, from, next) {

        if(to.path === '/users/interestCategory/' + this.id){
            this.$store.commit('editHistoryFile', {
                historyFile: this.$children[0].file
            });
            this.$store.commit('initHistoryUser', {
                historyUser: this.$children[0].mountedUser
            });
        }else{
            this.$store.commit('editHistoryFile', {
                historyFile: null
            });
            this.$store.commit('cleanHistoryUser', {
                historyUser: null
            });
            this.$store.commit('editFile', {
                file: null
            });
        }

        next();
    },
    computed:{
        user() {
            return this.$store.getters.user;
        },
        file() {
            return this.$store.getters.file;
        },
        historyFile(){
            return this.$store.getters.historyFile;
        },
        historyUser(){
            return this.$store.getters.historyUser;
        }
    },
}
</script>

<style scoped>
.yan-usercenter-info{
    background-color: #f4f4f4;
}
</style>