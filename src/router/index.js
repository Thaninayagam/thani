import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Explore from '/src/pages/Explore.vue'
import Portfolio from '/src/pages/Portfolio.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/explore',
        name: 'Explore',
        component: Explore,
    },
    {
        path:'/Portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router