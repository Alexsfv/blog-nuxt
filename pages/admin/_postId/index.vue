<template>
    <newPostForm
        :postEdit="post"
        @submit="onSubmit"
    />
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm'

export default {
    components: {
        newPostForm
    },
    layout: 'admin',
    data() {
        return {
            post: {
                id: 1,
                title: '1 Post',
                descr: 'lorem Numquam nesciunt veritatis maxime libero reiciendis',
                img: 'https://gazetavolgodonsk.ru/wp-content/uploads/2020/02/skolko-vesit-samyj-tolstyj-kot-na-planete2-1140x760.jpg',
                content: 'sad323r2c5234 CONTENT'
            }
        }
    },
    methods: {
        onSubmit(post) {
            console.log('post editing!')
            console.log(post)
        }
    }
}
</script>
