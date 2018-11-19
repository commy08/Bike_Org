import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

import Header from '@/pages/layout/header'
import Footer from '@/pages/layout/footer'

import Home from '@/pages/HomePages/home'

import ProfileOrg from '@/pages/HomePages/user/profileOrg'
import Addevent from '@/pages/HomePages/user/addevent'
import Amound from '@/pages/HomePages/user/amound'

import Callback from '@/pages/layout/callback'

import ProfileUser from '@/pages/HomePages/user/profileUser'
// import RegiProfileUser from '@/pages/HomePages/user/regiProfileUser'

import Events from '@/pages/HomePages/event'
import MTB_Bike from '@/pages/HomePages/mtbBike'
import road_bike from '@/pages/HomePages/roadBike'

import selecttype from '@/pages/HomePages/selectType'
import RegisterUser from '@/pages/HomePages/user/registerUser'
import RegisterOrg from '@/pages/HomePages/user/registerOrg'

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
      {path : '', name : 'MTBBike',component : MTB_Bike},
      {path : '/event/road_bike', name : 'RoadBike',component : road_bike}
    ],
  },
  {
    path: '/profileOrg',
    name:'profileOrg',
    components: {
        header: Header,
        default: ProfileOrg,
        footer: Footer
    },
    children:[
      {path : '/', name : 'event',component : event},
      {path : '/profileOrg/addevent', name : 'addevent',component : Addevent},
      {path : '/profileOrg/amound', name : 'amound',component : Amound}
    ],
  },
  { 
      path: '/logout',
      name: 'logout',
      beforeEnter: (to, from, next) => {
          localStorage.clear()
          next('/')
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
    path: '/profileuser',
    name:'profileuser',
    components: {
        header: Header,
        default: ProfileUser,
        footer: Footer
    },
    // children:[
    //   { path : '', name : 'RegiProfileUser',component : RegiProfileUser },
    //   { path : '/profileUser/profileOrg1', name : 'profileOrg1',component : profileOrg1 }
    // ],
  },
  {
    path: '/selecttype',
    name:'selecttype',
    components: {
        header: Header,
        default: selecttype,
        footer: Footer
    }
  },
  {
    path: '/RegisterUser',
    name:'registerUser',
    components: {
        header: Header,
        default: RegisterUser,
        footer: Footer
    }
  },
  {
    path: '/RegisterOrg',
    name:'registerOrg',
    components: {
        header: Header,
        default: RegisterOrg,
        footer: Footer
    }
  },
]

const router = new VueRouter({
  mode :'history',
  routes // short for `routes: routes`
})

export default router

