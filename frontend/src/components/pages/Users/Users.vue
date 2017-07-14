<template>
    <!--<yan-login-header></yan-login-header>-->
    <div class="yan-usercenter">
        <yan-usercenter-header :id="id"></yan-usercenter-header>
    </div>

</template>
<script>
import YanUserCenterHeader from '@/components/pages/Users/UserCenter/UserCenterHeader';

export default {
    data() {
        return {
            id: -1
        }
    },
    components: {
        YanUserCenterHeader
    },
    mounted() {
        this.id = this.$router;
        console.log(this.id);
    }
}
</script>

<style scoped>
.yan-usercenter{
    background-color: white;
}
</style>