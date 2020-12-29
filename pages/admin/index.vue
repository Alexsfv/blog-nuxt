<template>
    <PostsList :admin="true" :posts="getPostsLoaded"/>
</template>

<script>
export default {
    layout: 'admin',
    created() {
        if (!this.getPostsLoaded || this.getPostsLoaded.length === 0) {
            this.$store.dispatch('loadInitialPosts')
        }
    },
    computed: {
        getPostsLoaded() {
            return this.$store.getters.getPostsLoaded
        }
    }
}
</script>