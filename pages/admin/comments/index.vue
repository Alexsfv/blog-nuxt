<template>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
        <tbody slot="tbody">
            <tr v-for="comment in comments" :key="comment.id">
                <td><span>{{ comment.name }}</span></td>
                <td><span>{{ comment.text }}</span></td>
                <td>
                    <span v-if="comment.status" class="status true"> Publish </span>
                    <span v-else class="status false"> Hiden </span>
                </td>
                <td><span @click="changeComment(comment.id)" class="link"> Change Status </span></td>
                <td><span @click="deleteComment(comment.id)" class="link"> Delete</span></td>

            </tr>
        </tbody>
    </commentTable>
</template>

<script>
import commentTable from '@/components/Admin/commentTable'

export default {
    components: {
        commentTable
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
            },
            comments: [
                {
                    id: 1,
                    name: 'Alex',
                    text: 'veritatis maxime libero reiciendis. lorem Numquam ',
                    status: true,
                },
                {
                    id: 2,
                    name: 'Evgen',
                    text: 'veritatis maxime libero reiciendis. lorem Numquam ',
                    status: false,
                }
            ]
        }
    },
    methods: {
        changeComment(id) {
            console.log(`Change comment id - ${id}`)
        },
        deleteComment(id) {
            console.log(`Delete comment id - ${id}`)
        }
    }
}
</script>
