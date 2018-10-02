import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

// import index from '@/pages/mainIndex'
// import list from '@/pages/HomePages/list'

import Header from '@/pages/layout/header'
import Footer from '@/pages/layout/footer'
import Home   from '@/pages/HomePages/home'
import Events from '@/pages/HomePages/event'
import Register from '@/pages/HomePages/user/profileOrg'
import Login from '@/pages/HomePages/login'
import Profile from '@/pages/HomePages/user/profile'
import callback from '@/pages/layout/callback'

const routes = [
  { 
    path: '/',
    name:'home',
    components: {
        header: Header,
        default: Home,
        footer: Footer
    }
  },
  {
    path: '/event',
    name:'event',
    components: {
        header: Header,
        default: Events,
        footer: Footer
    }
  },
  {
    path: '/profileOrg',
    name:'profileOrg',
    components: {
        default: Register,
    }
  },
  {
    path: '/login',
    name:'login',
    components: {
        header: Header,
        default: Login,
        footer: Footer
    }
  },
  {
    path: '/profile',
    name:'profile',
    components: {
        header: Header,
        default: Profile,
        footer: Footer
    }
  },
  {
    path: '/callback',
    name:'callback',
    components: {
        default: callback
    }
  },
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

export default router

