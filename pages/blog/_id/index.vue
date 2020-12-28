<template>
    <div class="wrapper-content wrapper-content--fixed">
       <post :post="post"/>
       <comments :comments="comments"/>
       <new-comment :postId="$route.params.id"/>
    </div>
</template>

<script>
import post from '@/components/Blog/Post'
import newComment from '@/components/Comments/NewComment'
import comments from '@/components/Comments/Comments'
import axios from 'axios'

export default {
    components: {
        post,
        newComment,
        comments,
    },
    // computed: {

    // },
    async asyncData(context) {
        const [post, comments] = await Promise.all([
            axios.get(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
            axios.get(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments.json`)
        ])

        let commentsArray = []
        commentsArray = Object.values(comments.data).filter(comment => comment.postId === context.params.id && comment.publish)

        return {
            post: post.data,
            comments: commentsArray
        }
    }
}
</script>

<style lang="scss" scoped>
.post {
    max-width: 900px;
    margin: 0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        margin-bottom: 16px;
        max-width: 400px;
    }
    p {
        color: #999
    }
}
.post-body {
    text-align: left;
}
</style>