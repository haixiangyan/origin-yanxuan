<template>
    <div class="choose-num">
        <!-- 减一件 -->
        <div @click="sub" class="sub">
            <img src="/static/icons/subtract.png" alt="sub">
        </div>
    
        <div class="num">
            <input v-model="selectNum" type="text">
        </div>
    
        <!-- 加一件 -->
        <div @click="add" class="add">
            <img src="/static/icons/add.png" alt="add">
        </div>
    </div>
</template>

<script>
export default {
    props: ['num'],
    data() {
        return {
            selectNum: 1
        }
    },
    watch: {
        selectNum: function (newNum) {
            if (newNum === '') {
                this.selectNum = 0;
            }

            // 将选择的数量返回到父组件上
            this.$store.commit('changeNum', this.newNum);
        }
    },
    methods: {
        add() {
            this.selectNum ++;
        },
        sub() {
            if (this.selectNum === 1) {
                return ;
            }
            this.selectNum --;
        }
    },
    mounted() {
        this.selectNum = this.num;  
    }
}
</script>

<style scoped>
img {
    max-width: 50px;
}

.choose-num {
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.num {
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    height: 90px;
}

.num input {
    width: 50px;
    outline: none;
}

.sub,
.add {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #666;
    height: 90px;
}

.sub {
    border-radius: 7px 0 0 7px;
}

.add {
    border-radius: 0 7px 7px 0;
}
</style>
