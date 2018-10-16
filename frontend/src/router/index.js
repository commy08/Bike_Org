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
import Profile from '@/pages/HomePages/user/profileOrg'
import Callback from '@/pages/layout/callback'
import Checkuser from '@/pages/layout/checkuser'
import RegiProfileUser from '@/pages/HomePages/user/regiProfileUser'
import RegiProfileOrg from '@/pages/HomePages/user/regiProfileOrg'
import MTBBike from '@/pages/HomePages/mtbBike'
import RoadBike from '@/pages/HomePages/roadBike'

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
    },
    children:[
      {path : '', name : 'MTBBike',component : MTBBike},
      {path : '/event/RoadBike', name : 'RoadBike',component : RoadBike}
    ],
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
        default: Callback,
    }
  },
  {
    path: '/checkuser',
    name:'checkuser',
    components: {
        header: Header,
        default: Checkuser,
        footer: Footer
    },
    children:[
      { path : '', name : 'RegiProfileUser',component : RegiProfileUser },
      { path : '/checkuser/regiProfileOrg', name : 'RegiProfileOrg',component : RegiProfileOrg }
    ],
  },
]

const router = new VueRouter({
  mode :'history',
  routes // short for `routes: routes`
})

export default router

