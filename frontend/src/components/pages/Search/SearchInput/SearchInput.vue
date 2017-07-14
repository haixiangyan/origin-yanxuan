<template>
    <div class="yan-search-input">
        <!-- 搜索图标 -->
        <div class="yan-search-input-wrapper">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input v-model="keyword" type="text" placeholder="Levis制造商平角内裤仅59元2条">
            <span @click="removeKeyword" v-show="isShowCancel"><i class="fa fa-times" aria-hidden="true"></i></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: '',
            isShowCancel: false
        }
    },
    watch: {
        keyword: function (val) {
            let result = [];
            this.isShowCancel = false;

            if (val.length !== 0) {
                // 显示按钮
                this.isShowCancel = true;

                // 发送请求获取结果内容
                result = [
                    {
                        title: '小吃'
                    },
                    {
                        title: '小东西'
                    },
                    {
                        title: '小白鞋'
                    },
                    {
                        title: '小包'
                    }
                ];
            }

            // 将结果返回到父组件
            this.$emit('getResult', result);
        }
    },
    methods: {
        removeKeyword() {
            this.keyword = '';
        }
    }
}
</script>

<style scoped>
.yan-search-input {
    display: flex;
    align-items: center;
    background: #fff;
}

/* 图标 */
.yan-search-input-wrapper {
    width: 93%;
    padding: 13px 0 13px 25px;
    display: inline-block;
    background: #f4f4f4;
    border-radius: 6px;
}

.yan-search-input-wrapper i {
    color: #666;
}

/* 输入框 */
.yan-search-input input {
    display: inline-block; 
    width: 85%;
    outline: none;
    background: #f4f4f4;
    border: none;
}
</style>

