import Vue from 'vue'
import Router from 'vue-router';
import home from '../components/home';
import category from "../components/category";
import random from "../components/random";
import detail from "../components/detail";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: home
        },
        {
            path: '/category',
            name: 'Category',
            component: category
        }, {
            path: '/random',
            name: 'Random',
            component: random
        },
        {
            path: '/detail',
            name: 'Detail',
            component: detail
        }
    ]
})
