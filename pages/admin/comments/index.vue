<template>
    <no-ssr>
        <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
            <tbody slot="tbody">
                <tr v-for="comment in comments" :key="comment.id">
                    <td><span>{{ comment.name }}</span></td>
                    <td><span>{{ comment.text }}</span></td>
                    <td>
                        <span v-if="comment.publish" class="status true"> Publish </span>
                        <span v-else class="status false"> Hiden </span>
                    </td>
                    <td><span @click="changeComment(comment)" class="link"> Change Status </span></td>
                    <td><span @click="deleteComment(comment.id)" class="link"> Delete</span></td>

                </tr>
            </tbody>
        </commentTable>
    </no-ssr>
</template>

<script>
import commentTable from '@/components/Admin/commentTable'
import axios from 'axios'

export default {
    components: {
        commentTable
    },
    layout: 'admin',
    data() {
        return {
            comments: []
        }
    },
    mounted() {
        this.loadComments()
    },
    methods: {
        changeComment(comment) {
            comment.publish = !comment.publish
            axios.put(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
        },
        deleteComment(id) {
            axios.delete(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments/${id}.json`)
                .then(() => this.loadComments())
        },
        loadComments() {
            axios.get('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments.json')
            .then(res => {
                const comments = Object.entries(res.data).map( ([key, comment]) => ({...comment, id: key}) )
                this.comments = comments
            })
        }
    }
}
</script>
