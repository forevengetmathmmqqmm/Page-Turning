import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        component: () => import('@/pages/home/index.vue')
    },
    {
        path: '/pageTurn',
        component: () => import('@/pages/pageTurn/index.vue')
    },
    { path: '/', redirect: '/home' }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})