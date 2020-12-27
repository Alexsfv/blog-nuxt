<template>
    <section class="contact">
        <div class="container">
            <h2 class="title"> Contact me! </h2>
            <form @submit.prevent="onSubmit" class="contact-form">
                <Message v-if="message" :message="message"/>

                <AppInput v-model="user.name">Name:</AppInput>
                <AppInput v-model="user.email" type="email">Email:</AppInput>
                <AppTextArea v-model="user.text">Message:</AppTextArea>

                <div class="controls">
                    <AppButton class="btnWhite">Submit</AppButton>
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
            user: {
                name: '',
                email: '',
                text: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.user)
            this.message = 'Submitted!'
            this.resetForm()
        },
        resetForm() {
            this.user.name = ''
            this.user.email = ''
            this.user.text = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.contact {
    text-align: center;
    background-color: #0d76d8;
    color: #fff;
    .contact-form {
        max-width: 600px;
        margin: 30px auto;
    }
    .title {
        color: #fff;
    }
    .controls {
        margin: 30px;
    }
}
</style>