import { createStore } from 'vuex'
import { get_Auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }
    },
    actions: {
        async signup(context, { email, password }) {
            const response = await createUserWithEmailAndPassword(get_Auth, email, password)
            if(response) {
                context.commit('setUser', response.user)
            }else {
                throw new Error('Could not complete signup')
            }
        },
        async login(context, { email, password }) {
            const response = await signInWithEmailAndPassword(get_Auth, email, password)
            if(response) {
                context.commit('setUser', response.user)
            }else {
                throw new Error('Could not complete login')
            }
        },
        async logout(context) {
            await signOut(get_Auth)
            context.commit('setUser', null)
        }
    }
})

const unsub = onAuthStateChanged(get_Auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})
export default store