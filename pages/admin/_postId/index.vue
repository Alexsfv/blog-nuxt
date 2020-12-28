<template>
    <newPostForm
        :postEdit="post"
        @submit="onSubmit"
    />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm'
import axios from 'axios'

export default {
    components: {
        newPostForm
    },
    layout: 'admin',
    asyncData(context) {
        return axios.get(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
            .then(res => ({
                post: {...res.data, id: context.params.postId}
            }))
            .catch(e => context.error(e))
    },
    methods: {
        onSubmit(post) {
            this.$store.dispatch('editPost', post)
                .then(() => this.$router.push('/admin'))
        }
    }
}
</script>
