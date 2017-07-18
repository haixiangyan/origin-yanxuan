<template>
    <div class="topic">
        <yan-topic-header></yan-topic-header>
        <yan-topic-body></yan-topic-body>
    </div>
</template>

<script>
// 引入专题的头部和内容
import YanTopicHeader from '@/components/pages/Topic/TopicHeader/TopicHeader';
import YanTopicBody from '@/components/pages/Topic/TopicBody/TopicBody';

export default {
    data() {
        return {
            topic: 'This is a topic page'
        }
    },
    components: {
        YanTopicHeader,
        YanTopicBody
    }
}
</script>

<style scoped>
.topic{
    background-color: #f4f4f4;
}
</style>