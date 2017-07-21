<template>
  <div class="yan-chat-footer">
      <div @keyup.enter="send" class="input">
          <textarea v-model="sendText" cols="30" rows="1"></textarea>
      </div>

      <div class="send">
          <button @click="send">发送</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sendText: ''
        }
    },
    methods: {
        send() {
            this.$emit('send', this.sendText);
            this.sendText = '';
        }
    }
}
</script>

<style scoped>
.yan-chat-footer {
    padding: 25px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #999;
    background: #fff;
    z-index: 4;
}

/* 输入框 */
.textarea {
    border: none;
    outline: none;
}

.input textarea {
    font-size: 40px;
    width: 100%;;
    outline: none;
    resize: none;
}

/* 发送按钮 */
.send {
    /* flex-grow: 1; */
    text-align: right;
}

.send button {
    padding: 15px 35px;
    font-size: 40px;
    color: #fff;
    border-radius: 7px;
    border: none;
    background: rgb(171, 43, 43);
    outline: none;
}
</style>
