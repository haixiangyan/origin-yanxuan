<template>
    <div class="yan-usercenter-header-wrapper">
        <div class="user">
            <img src="">
            {{id}}
        </div>
    </div>
</template>
<script>


export default {
    props: ['id'],
    data() {
        return {
        
        }
    },
    methods:{
                   
    }
}
</script>

<style scoped>
.yan-usercenter-header-wrapper{
    width: 90%;
    /* height: 450px; */
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
}

.user{

}
</style>