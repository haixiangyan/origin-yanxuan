<template>
    <div class="yan-usercenter-nav">
        <yan-user-center-nav-body :id="id"></yan-user-center-nav-body>
    </div>
</template>
<script>

import YanUserCenterNavBody from '@/components/pages/Users/UserCenter/PersonalInformation/Nav/NavBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components:{
        YanUserCenterNavBody
    },
    mounted() {
        console.log(this.id);
    }
}
</script>

<style scoped>
.yan-usercenter-nav{
    background-color: #f4f4f4;
}
</style>