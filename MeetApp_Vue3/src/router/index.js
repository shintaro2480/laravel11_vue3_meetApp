import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SigninComponent from '../components/SigninComponent.vue';
import SignupComponent from '../components/SignupComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/signin',
        name: 'Signin',
        component: SigninComponent
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
