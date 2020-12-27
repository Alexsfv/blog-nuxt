<template>
    <PostsList :admin="true" :posts="posts"/>
</template>

<script>
export default {
    layout: 'admin',
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: '1 Post',
                    descr: 'lorem Numquam nesciunt veritatis maxime libero reiciendis',
                    img: 'https://gazetavolgodonsk.ru/wp-content/uploads/2020/02/skolko-vesit-samyj-tolstyj-kot-na-planete2-1140x760.jpg'
                },
                {
                    id: 2,
                    title: '2 Post',
                    descr: 'lorem Numquam nesciunt veritatis maxime libero reiciendis',
                    img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk1ki_pt0e2uV_jnk2Xf1spaaKTM5SRkZCeTgDn6uOyic'
                },
                {
                    id: 3,
                    title: '3 Post',
                    descr: 'lorem Numquam nesciunt veritatis maxime libero reiciendis',
                    img: 'https://pbs.twimg.com/media/D4vjVNdW0AErrUD.jpg:large'
                }
            ]
        }
    }
}
</script>


