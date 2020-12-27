<template>
    <header>
        <div class="navbar">
            <div class="container">

                <div class="navbar-content">
                    <div class="logo">
                        <nuxt-link to="/">Blog</nuxt-link>
                    </div>
                    <ul class="navbar-list">

                        <li
                            v-for="(link, i) in links"
                            class="navbar-item"
                            :key="i + link.url"
                        >
                            <nuxt-link :to="link.url" class="navbar-link">{{ link.title }}</nuxt-link>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { title: 'Blog', url: '/blog' },
                { title: 'About', url: '/about' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.logo a {
    color: #333;
}
.navbar-link {
    &.nuxt-link-exact-active {
        color: #4165de;
    }
}
</style>