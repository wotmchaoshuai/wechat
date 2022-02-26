import { createRouter, createWebHashHistory } from "vue-router"
import Login from './components/login.vue'
import Main from './components/main.vue'

import Home from './components/myhome.vue'
import Goods from './components/mygoods.vue'
import User from './components/myuser.vue'
import Sports from './components/main-mysports.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/main/home' },
        { path: '/login', component: Login },
        {
            path: '/main', component: Main, redirect: '/main/home',
            children: [
                { path: 'home', component: Home },
                { path: 'goods', component: Goods },
                { path: 'sport', component: Sports },
                { path: 'user', component: User },

            ]
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()
    const token = localStorage.getItem('token')
    if (!token) {
        return next('/login')
    }
    next()
})
export default router