<template>
    <div class="yan-usercenter">
        <yan-user-center-header :id="id"></yan-user-center-header>
        <yan-user-center-body :id="id"></yan-user-center-body>
    </div>
</template>
<script>
import YanUserCenterHeader from '@/components/pages/Users/UserCenter/UserCenterHeader';
import YanUserCenterBody from '@/components/pages/Users/UserCenter/UserCenterBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components: {
        YanUserCenterHeader,
        YanUserCenterBody
    },
    mounted() {

    }
}
</script>

<style scoped>
.yan-usercenter{
    background-color: #f4f4f4;
}
</style>