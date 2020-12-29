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
    },
    head() {
        const title = 'My Blog Page'
        const description = 'My SSR Blog! Witn Nuxt.js'
        const type = 'site'

        return {
            title,
            meta: [
                { hid: 'og:title', name: 'og:title', content: title },
                { hid: 'og:description', name: 'og:description', content: description },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:type', name: 'og:type', content: type },
            ]
        }
    },
}
</script>
