import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import store from "@/store";

import LoginComponent from "@/components/LoginComponent.vue";
import HomepageComponent from "@/components/HomepageComponent.vue";
import SearchUsersComponent from "@/components/SearchUsersComponent.vue";
import SignUpView from "@/components/SignUpView.vue";
import userProfileViewComponent from "@/components/userProfileViewComponent.vue";
import homeLoggedComp from "@/components/loggedUserComp/homeLoggedComp.vue";
import messagesLogged from "@/components/loggedUserComp/messagesLoggedComp.vue";
import searchLoggedComp from "@/components/loggedUserComp/searchLoggedComp.vue";
import editProfileComp from "@/components/loggedUserComp/editProfileComp.vue";
import changePasswordComp from "@/components/loggedUserComp/changePasswordComp.vue";

const routes = [
    { path: '/', component: HomepageComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignUpView },
    { path: '/searchUsers', component: SearchUsersComponent },
    { path: '/userProfileView', component: userProfileViewComponent },
    { path: '/homeLogged', component:  homeLoggedComp},
    { path: '/searchLogged', component: searchLoggedComp},
    { path: '/messagesLogged', component:  messagesLogged},
    { path: '/editProfile', component: editProfileComp },
    { path: '/changePassword', component: changePasswordComp},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.config.globalProperties.$http = axios;
app.use(store);
app.use(router).mount('#app');
