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
            console.log(this.comment)
            this.message = 'Submitted!'
            this.resetForm()
        },
        resetForm() {
            this.comment.name = ''
            this.comment.text = ''
        }
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