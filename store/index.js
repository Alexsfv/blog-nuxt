import axios from 'axios'

export const state = () => ({
    postsLoaded: [],
    commentsLoaded: []
})

export const mutations = {
    addComment(state, comment) {
        state.commentsLoaded.push(comment)
    },
    addPost(state, post) {
        state.postsLoaded.push(post)
    },
    setPosts(state, posts) {
        state.postsLoaded = posts
    },
    editPost(state, editPost) {
        const editPostIndex = state.postsLoaded.findIndex(post => post.id === editPost.id)
        state.postsLoaded[editPostIndex] = editPost
    }

}

export const actions = {

    nuxtServerInit({commit}) {
        return axios.get('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts.json')
        .then(res => {
            const postsArray = []
            for (let key in res.data) {
                if (res.data.hasOwnProperty(key)) {
                    postsArray.push({...res.data[key], id: key})
                }
            }
            commit('setPosts', postsArray)
        })
        .catch(e => console.log(e))
    },

    addComment({commit}, comment) {
        return axios.post('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments.json', comment)
            .then(res => {
                commit('addComment', {...comment, id: res.data.name})
            })
            .catch(e => console.log(e))
    },

    addPost({commit}, post) {
        return axios.post('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts.json', post)
            .then(res => {
                commit('addPost', {...post, id: res.data.name})
            })
            .catch(e => console.log(e))
    },

    editPost({commit}, editPost) {
        return axios.put(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts/${editPost.id}.json`, editPost)
            .then(res => {
                commit('editPost', editPost)
            })
            .catch(e => console.log(e))
    },

}

export const getters = {

    getPostsLoaded(state) {
        return state.postsLoaded
    }

}
