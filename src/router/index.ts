import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/components/home.vue';
import category from "@/components/category.vue";
import random from "@/components/random.vue";
import detail from "@/components/detail.vue";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
