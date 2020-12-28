<template>
    <PostsList :admin="true" :posts="getPostsLoaded"/>
</template>

<script>
export default {
    layout: 'admin',
    computed: {
        getPostsLoaded() {
            return this.$store.getters.getPostsLoaded
        }
    }
}
</script>


