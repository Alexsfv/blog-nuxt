<template>
    <no-ssr>
        <div class="wrapper">
            <Header />
            <div class="wrapper-content wrapper-content--fixed">
                <Intro title="Admin page: ">
                    <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
                    <nuxt-link to="/admin/new-post" class="link linkWhite">New post</nuxt-link>
                    <nuxt-link to="/admin/comments" class="link linkWhite">Comments</nuxt-link>
                    <span class="link linkWhite" @click="logoutUser">Logout</span>
                </Intro>

                <Nuxt />
            </div>
        </div>
    </no-ssr>
</template>

<script>
import Header from "@/components/system/Header";

export default {
    components: {
        Header
    },
    middleware: ['auth-check', 'auth'],
    methods: {
        logoutUser() {
            this.$store.dispatch('logoutUser')
                .then(res => this.$router.push('/admin/auth'))
        }
    }
};
</script>