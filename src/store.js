
import { createStore } from 'vuex';

export default createStore({
    state: {
        loggedIn: false,
        user: {
            username: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            profilePicture: '',
            // Dodajte ostale podatke prema potrebi
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
