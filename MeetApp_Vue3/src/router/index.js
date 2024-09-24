import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SigninComponent from '../components/SigninComponent.vue';
import SignupComponent from '../components/SignupComponent.vue';
import RestaurantComponent from '../components/RestaurantComponent.vue';
import RestaurantCreateComponent from '../components/RestaurantCreateComponent.vue';

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
    {
        path: '/restaurant',
        name: 'Restaurant',
        component: RestaurantComponent
    },
    {
        path: '/restaurantcreate',
        name: 'Restaurantcreate',
        component: RestaurantCreateComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
