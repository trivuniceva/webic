
import { createStore } from 'vuex';

export default createStore({
    state: {
        loggedIn: false,
        user: {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            gender: '',
            role: '',
            profilePicture: '',
            posts: '',
            pictures: '',
            friendRequests: '',
            friendList: '',
            privateAccount: '',
        },

    },
    mutations: {
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },

        setUser(state, userData) {
            state.user = userData;
        },

    },
});
