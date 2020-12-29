<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section class="about">
            <div class="container">

                <h1 class="title">About my blog: </h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam quas error maxime deserunt excepturi cumque necessitatibus placeat dicta alias iste numquam distinctio, consectetur repudiandae quaerat provident iusto atque culpa.</p>

                <Intro title="Title About text"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam quas error maxime deserunt excepturi cumque necessitatibus placeat dicta alias iste numquam distinctio, consectetur repudiandae quaerat provident iusto atque culpa.</p>

                <img src="@/assets/img/about.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam quas error maxime deserunt excepturi cumque 
                necessitatibus placeat dicta alias iste numquam distinctio, consectetur repudiandae quaerat provident iusto atque culpa.</p>

            </div>
        </section>
    </div>
</template>

<script>
export default {
    head() {
        const title = 'About My SSR Blog'
        const description = 'About My SSR Blog! Witn Nuxt.js'
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

<style lang="scss" scoped>
.about {
    text-align: center;
    p {
        margin-bottom: 10px;
    }
}
</style>