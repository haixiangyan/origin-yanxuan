<template>
  <div class="yan-good-comment">
    <!-- 头部 -->
    <div class="yan-good-comment-header">
      <!-- 用户信息 -->
      <div class="user">
        <!-- 用户的头像 -->
        <img src="/static/img/good/comment/avatar.jpg" alt="avatar">
  
        <!-- 用户的名字 -->
        <span>h****a</span>
      </div>
  
      <!-- 发表的时间 -->
      <div class="date">
        2017-06-20 22:24:39
      </div>
    </div>
  
    <!-- 内容 -->
    <div class="yan-good-comment-content">
      <p>
        根据我多年的发烧经验，这款耳机实在是太太太超值了！ 音质超赞，蓝牙稳定。说它音质普通的人完全外行，是根据价位做出的心理上的判断， 你卖他两千块他就说好了
      </p>
    </div>

    <!-- 图片区 -->
    <div class="yan-good-comment-pics">
      <img src="/static/img/good/comment/pic.jpg" alt="comment">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 评论头部 */
.yan-good-comment-header {
  padding: 35px 0 20px;
}

/* 用户信息 */
.user {
  display: flex;
  align-items: center;
}

.user img {
  margin-right: 20px;
  max-width: 80px;
  border-radius: 50%;
}

/* 日期 */
.date {
  padding-top: 25px;
  color: rgb(127, 127, 127);
  font-size: 32px;
}

/* 评论内容区 */
.yan-good-comment-content {
  width: 90%;
  word-break: break-all;
  word-wrap: break-word;
  line-height: 45px;
}

/* 图片 */
.yan-good-comment-pics {
  margin-top: 15px;
  padding-bottom: 37px;
}

.yan-good-comment-pics img {
  max-height: 200px;
}
</style>
