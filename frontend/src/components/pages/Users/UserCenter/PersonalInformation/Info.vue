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
    }
}
</script>

<style scoped>
.yan-usercenter-info{
    background-color: #f4f4f4;
}
</style>