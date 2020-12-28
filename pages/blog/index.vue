<template>
    <div class="wrapper-content wrapper-content--fixed">
        <Intro title="My posts: "/>
        <PostsList :posts="getPostsLoaded"/>
    </div>
</template>

<script>
export default {
    computed: {
        getPostsLoaded() {
            return this.$store.getters.getPostsLoaded
        }
    }
}
</script>
