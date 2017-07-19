<template>
    <div class="yan-add-comment">
        <!-- 头部 -->
        <div class="header">
            <!-- 返回按钮 -->
            <img @click="back" src="/static/icons/back.png" alt="back">

            <span class="header-title">发表评价</span>

            <span class="publish">发布</span>
        </div>
        
        <!-- 商品详情 -->
        <div class="good-info">
            <div>
                <img :src="commentOrderInfo.picture" alt="good pic">
                <span>商品评价</span>
            </div>

            <!-- 评分 -->
            <div>
                <span class="rating-text">{{ratingText[rating-1]}}</span>
                
                <star-rating 
                    @rating-selected ="setRating"
                    :active-color="'rgb(180, 40, 45)'"
                    :show-rating="false"
                    >
                </star-rating>
            </div>
        </div>

        <!-- 评论内容 -->
        <div class="comment">
            <textarea class="comment-content" cols="30" rows="5" :placeholder="placeholder"></textarea>

            <div class="comment-images">
                <div class="comment-image-item"
                     v-for="(commentImage, index) in commentImages"
                     :key="index">

                    <!-- 图片 -->
                    <img :src="commentImage" alt="image">

                    <!-- 删除图片 -->
                    <span @click="removeCommentImage(index)">
                        <img src="/static/icons/close.png" alt="close">
                    </span>
                </div>

                <yan-empty-image 
                    v-on:selectSrc="selectSrc"
                    :curNum="commentImages.length" 
                    :totalNum="5">
                </yan-empty-image>
            </div>
        </div>
    </div>
</template>

<script>
// 引入评分的组件
import StarRating from 'vue-star-rating';
// 引入空图的组件
import YanEmptyImage from '@/components/pages/CommentList/AddComment/EmptyImage/EmptyImage';

export default {
    data() {
        return {
            rating: 1,
            placeholder: '宝贝满足你的期待吗？说说人的使用心得，分享给想买的他们吧',
            ratingText: [
                '非常差',
                '差',
                '一般',
                '好',
                '非常好'
            ],
            commentImages: [
                '/static/img/cart/cartItem.png',
                '/static/img/cart/cartItem.png',
                '/static/img/cart/cartItem.png',
            ],
            uploadSrc: ''
        }
    },
    computed: {
        commentOrderInfo() {
            return this.$store.getters.commentOrderInfo;
        },
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        setRating(rating) {
            this.rating = rating;
        },
        removeCommentImage(selectedIndex) {
            this.commentImages = this.commentImages.filter((image, index) => {
                return selectedIndex !== index;
            })
        },
        selectSrc(uploadSrc) {
            this.commentImages.push(uploadSrc);
        }
    },
    components: {
        StarRating,
        YanEmptyImage
    }
}
</script>

<style scoped>
/* 头部 */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    border-bottom: 1px solid #999;
}

.header img {
    width: 60px;
}

.header-title {
    font-size: 40px;
}

.publish {
    color: rgb(180, 40, 45);
}

/* 商品详情 */
.good-info {
    padding: 0 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;
}

.good-info img {
    width: 120px;
    margin-right: 15px;
}

.good-info > div {
    display: flex;
    align-items: center;
}

.rating-text {
    color: #999;
    padding-right: 15px;
}

/* 商品评论的内容 */
.comment {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.comment-content {
    font-size: 36px;
    outline: none;
    border: none;
}

textarea::-webkit-input-placeholder {
  font-size: 35px;
}
textarea:-moz-placeholder {
  font-size: 35px;
}
textarea::-moz-placeholder {
  font-size: 35px;
}
textarea::-ms-input-placeholder {
  font-size: 35px;
}

/* 商品评论的图片 */
.comment-images {
    display: flex;
}

.comment-image-item {
    position: relative;
}

.comment-image-item img {
    width: 150px;
    margin-right: 15px;
    border: 1px solid #999;
}

.comment-image-item span {
    position: absolute;
    background: black;
    opacity: 0.5;
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: -13px;
    right: 5px;
}

.comment-image-item span img {
    width: 26px;
    border: none;
    margin: 0;
}
</style>

