<template>
  <div v-show="curNum !== totalNum" class="yan-empty-images">
    <input ref="uploadInput" @change="selectFile" class="upload"  type="file">

    <img src="/static/icons/video.png" alt="video">

    <span v-show="curNum === 0">添加图片</span>

    <span v-show="0 < curNum && curNum < totalNum">
        {{`${curNum} / ${totalNum}`}}
    </span>
  </div>
</template>

<script>
export default {
    props: ['curNum', 'totalNum'],
    methods: {
        selectFile(event) {
            let file = event.target.files[0];
            this.$emit('selectSrc', window.URL.createObjectURL(file));
        }
    }
}
</script>

<style scoped>
.upload {
    opacity: 0;
    position: absolute;
    width: 150px;
    height: 150px;
}

.yan-empty-images {
    position: relative;
    display: inline-flex;
    width: 150px;
    height: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #999;;
}

.yan-empty-images img {
    width: 70px;
    margin-bottom: 10px;
}

.yan-empty-images span {
    color: #999;
    font-size: 24px;
}
</style>
