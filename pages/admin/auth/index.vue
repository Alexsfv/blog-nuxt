<template>
    <section class="auth">
        <div class="container">
            <form @submit.prevent="onSubmit" class="auth__form">
                <AppInput type="email" v-model="user.email">Login:</AppInput>
                <AppInput type="password" v-model="user.password">Password:</AppInput>

                <div class="controls">
                    <AppButton>Login!</AppButton>

                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: 'sa@dsfad.dgbdg',
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.user.email = ''
            this.user.password = ''
        },
    }
}
</script>

<style lang="scss">
.auth {
    text-align: center;
}
.auth__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    margin: 0 auto;
    max-width: 400px;
    input {
        width: 100%;
        margin-bottom: 15px;
    }
    .control {
        width: 100%;
    }
}
</style>