import Home from './components/Home.vue';
import Products from './components/Products.vue';

export const routes = [
    { path: '/', component: Home },
    {
        path: '/products',
        component: Products,
    },
    { path: '*', redirect: '/' }

];