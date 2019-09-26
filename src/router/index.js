import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/Index'
import PageN from '@/components/PageN'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/pagen',
        name: 'PageN',
        component: PageN  
    }
]
export default new VueRouter({
    mode: 'history',
    routes
})