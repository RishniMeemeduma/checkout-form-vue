import Vue from "vue";
import Router from "vue-router";

import Products from '../components/products/Product-list';
import Cart from '../components/cart/Cart-list';
import CheckoutForm from '../components/checkout/checkoutform';

Vue.use(Router);

const routes = [
    {
        path: "/",
        redirect: '/inventory',
    },
    {
        path: '/inventory',
        component: Products,
        name: 'inventory',
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart',
    },
    {
        path:'/checkout',
        component: CheckoutForm,
        name: 'checkout'
    }
];

const router = new Router({
    mode: 'history',
    routes,
});

export default router;
