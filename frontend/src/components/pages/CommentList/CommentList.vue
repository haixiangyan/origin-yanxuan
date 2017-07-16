<template>
    <div>
        list
    </div>
</template>

<script>
export default {
    data() {
        return {
            commentList: []
        }
    },
    mounted() {
        let id = this.$route.params.goodId;

        // 发送请求获取评论
        this.$http({
            method: 'get',
            url: `/shop/comment/${id}`
        })
            .then((res) => {
                this.commentList = res.body.data;
            })
            .catch((err) => {
                console.log('vue-resource err', err);
            });
    }
}
</script>

<style scoped>

</style>
