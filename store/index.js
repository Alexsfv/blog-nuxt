import axios from 'axios'

export const state = () => ({
    postsLoaded: [],
    token: null,
})

export const mutations = {
    addPost(state, post) {
        state.postsLoaded.push(post)
    },
    setPosts(state, posts) {
        state.postsLoaded = posts
    },
    editPost(state, editPost) {
        const editPostIndex = state.postsLoaded.findIndex(post => post.id === editPost.id)
        state.postsLoaded[editPostIndex] = editPost
    },
    setToken(state, token) {
        state.token = token
    },
    destroyToken(state) {
        state.token = null
    }

}

export const actions = {

    async nuxtServerInit({dispatch}) {
        await dispatch('loadInitialPosts')
    },
    loadInitialPosts({commit}) {
        console.log('setPosts');
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
    authUser({commit}, authData) {
        const key = 'AIzaSyAi_2GZUMrtTKiJ4PoopqKVjcy-c_TSSVo'
        const data = {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }
        const regLink = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
        const loginLink = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`

        return axios.post(loginLink, data)
            .then(res => commit('setToken', res.data.idToken))
            .catch(ee => console.log(e))
    },
    logoutUser({commit}) {
        commit('destroyToken')
    },

    addComment({commit}, comment) {
        return axios.post('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/comments.json', comment)
            .catch(e => console.log(e))
    },

    addPost({commit}, post) {
        return axios.post('https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts.json', post)
            .then(res => {
                commit('addPost', {...post, id: res.data.name})
            })
            .catch(e => console.log(e))
    },

    editPost({commit, state}, editPost) {
        return axios.put(`https://blog-nuxt-alexsfv-default-rtdb.firebaseio.com/posts/${editPost.id}.json?auth=${state.token}`, editPost)
            .then(res => {
                commit('editPost', editPost)
            })
            .catch(e => console.log(e))
    },

}

export const getters = {

    getPostsLoaded(state) {
        return state.postsLoaded
    },
    checkAuthUser(state) {
        return state.token !== null
    }

}
