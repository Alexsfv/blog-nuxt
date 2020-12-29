<template>
    <div class="wrapper-content wrapper-content--fixed">
        <promo />
        <Intro title="My lasts posts: "/>
        <PostsList :posts="posts"/>
        <contacts />
    </div>
</template>

<script>
import promo from '@/components/Promo'
import contacts from '@/components/Contacts'

export default {
    components: {
        promo,
        contacts
    },
    head() {
        const title = 'My SSR Blog'
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
    computed: {
        posts() {
            return this.$store.getters.getPostsLoaded
        }
    },
}
</script>
