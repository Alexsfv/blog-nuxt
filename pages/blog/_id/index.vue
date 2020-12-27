<template>
    <div class="wrapper-content wrapper-content--fixed">
       <post :post="post"/>
       <comments :comments="comments"/>
       <new-comment />
    </div>
</template>

<script>
import post from '@/components/Blog/Post'
import newComment from '@/components/Comments/NewComment'
import comments from '@/components/Comments/Comments'

export default {
    components: {
        post,
        newComment,
        comments,
    },
    data() {
        return {
            post: {
                id: 1,
                title: '1 Post',
                descr: 'lorem Numquam nesciunt veriatis maxime libero reiciendtis',
                content: 'lorem Numquam nesciunt veritatis maxime libero reiciendis. lorem Numquam nesciunt veritatis maxime libero reiciendis',
                img: 'https://gazetavolgodonsk.ru/wp-content/uploads/2020/02/skolko-vesit-samyj-tolstyj-kot-na-planete2-1140x760.jpg'
            },
            comments: [
                {
                    name: 'Alex',
                    text: 'veritatis maxime libero reiciendis. lorem Numquam '
                },
                {
                    name: 'Evgen',
                    text: 'veritatis maxime libero reiciendis. lorem Numquam '
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.post {
    max-width: 900px;
    margin: 0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        margin-bottom: 16px;
        max-width: 400px;
    }
    p {
        color: #999
    }
}
.post-body {
    text-align: left;
}
</style>