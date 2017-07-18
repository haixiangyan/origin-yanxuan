<template>
    <div class="yan-login">
        <yan-login-body></yan-login-body>
    </div>

</template>
<script>
import YanLoginBody from '@/components/pages/Users/Login/LoginBody/LoginBody';

export default {
    data() {
        return {

        }
    },
    components: {
        YanLoginBody
    }
}
</script>

<style scoped>
.yan-login{
    background-color: white;
}
</style>