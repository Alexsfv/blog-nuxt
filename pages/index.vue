<template>
    <div class="wrapper-content wrapper-content--fixed">
        <promo />
        <Intro title="My lasts posts: "/>
        <PostsList :posts="postsLoaded"/>
        <contacts />
    </div>
</template>

<script>
import promo from '@/components/Promo'
import contacts from '@/components/Contacts'

export default {
    components: {
        promo,
        contacts
    },
    data() {
        return {
            posts: []
        }
    },
    asyncData(context) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    postsLoaded: [
                        {
                            id: 1,
                            title: '1 Post',
                            descr: 'lorem Numquam nesciunt veritatis maxime libero reiciendis',
                            img: 'https://gazetavolgodonsk.ru/wp-content/uploads/2020/02/skolko-vesit-samyj-tolstyj-kot-na-planete2-1140x760.jpg'
                        }
                    ]
                })
            }, 1500);
        })
            .then(data => data)
            .catch(e => context.errer(e))
    },
}
</script>
