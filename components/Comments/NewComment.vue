<template>
    <section class="new-comment">
        <div class="container">
            <form @submit.prevent="onSubmit" class="contact-form">
                <Message v-if="message" :message="message"/>

                <AppInput v-model="comment.name">Name:</AppInput>
                <AppTextArea v-model="comment.text">Message:</AppTextArea>

                <div class="controls">
                    <AppButton>Submit</AppButton>
                </div>

            </form>
        </div>
    </section>
</template>

<script>

export default {
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            message: null,
            comment: {
                name: '',
                text: '',
            }
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('addComment', {
                postId: this.postId,
                publish: false,
                ...this.comment
            })
                .then(() => {
                    this.message = 'Submitted!'
                    this.comment.name = ''
                    this.comment.text = ''
                })
                .catch(e => console.log(e))
        },
    }
}
</script>

<style lang="scss" scoped>
.new-comment {
    text-align: center;
    .contact-form {
        max-width: 600px;
        margin: 30px auto;
    }
    .controls {
        margin: 30px;
    }
}
</style>