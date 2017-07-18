<template>
    <div class="yan-user-center-info-interest">
        <yan-user-center-info-interest-body :id="id"></yan-user-center-info-interest-body>
    </div>
</template>
<script>

import YanUserCenterInfoInterestBody from '@/components/pages/Users/UserCenter/PersonalInformation/Info/Interest/InterestCategoryBody';

export default {
    data() {
        return {
            id: this.$route.params.userId
        }
    },
    components:{
        YanUserCenterInfoInterestBody
    },
    mounted() {
        console.log(this.id);
    }
}
</script>

<style scoped>
.yan-user-center-info-interest{
    background-color: #f4f4f4;
}
</style>