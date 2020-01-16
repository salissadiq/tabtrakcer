import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state:{
        token: null,
        user: null,
        isloggedIn: false
    },
    mutations:{
        setToken(state, token) {
            state.token = token
            if(token) {
                state.isloggedIn = true
            } else {
                state.isloggedIn = false
            }
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken', token)
        },
        setUser({commit}, user){
            commit('setUser', user)
        } 
    }
})
