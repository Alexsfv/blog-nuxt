<template>
    <section v-if="comments" class="comments">
        <div class="container">
            <h2 class="title">Comments</h2>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="name"> {{ comment.name }}</p>
                <p class="text">{{ comment.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    },
}
</script>

<style lang="scss">
.comments {
    margin: 30px auto;
    text-align: center;
}
.comment {
    width: 600px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .name {
        font-size: 24px;
        color: rgb(1, 140, 233);
        margin-bottom: 12px;
        text-align: center;
    }
}
</style>