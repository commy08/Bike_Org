import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

import Header from '@/pages/layout/header'
import Footer from '@/pages/layout/footer'

import Home from '@/pages/HomePages/home'

import ProfileOrg from '@/pages/HomePages/org/profileOrg'
import Addevent from '@/pages/HomePages/org/addevent'
import Amound from '@/pages/HomePages/org/amound'
import ckevent from '@/pages/HomePages/org/ckevent'

import Callback from '@/pages/layout/callback'

import ProfileUser from '@/pages/HomePages/user/profileUser'
import Formprofile from '@/pages/HomePages/user/formprofile'
import Historys from '@/pages/HomePages/user/historys'


import Events from '@/pages/HomePages/event'
import MTB_Bike from '@/pages/HomePages/user/mtbBike'
import road_bike from '@/pages/HomePages/user/roadBike'

import RegisterUser from '@/pages/HomePages/user/registerUser'
import RegisterOrg from '@/pages/HomePages/org/registerOrg'

import City from '@/pages/city'
import AllEvent from '@/pages/allEvent'

const routes = [
  {
    path: '/city',
    name: 'city',
    components: {
      header: Header,
      default: City,
      footer: Footer
    }
  },
  {
    path: '/allevent',
    name: 'AllEvents',
    components: {
      header: Header,
      default: AllEvent,
      footer: Footer
    }
  },
  {
    path: '/',
    name: 'home',
    components: {
      header: Header,
      default: Home,
      footer: Footer
    }
  },
  {
    path: '/event',
    name: 'event',
    components: {
      header: Header,
      default: Events,
      footer: Footer
    },
    children: [{
        path: '',
        name: 'MTBBike',
        component: MTB_Bike
      },
      {
        path: '/event/road_bike',
        name: 'RoadBike',
        component: road_bike
      }
    ],
  },
  {
    path: '/profileOrg',
    name: 'profileOrg',
    components: {
      header: Header,
      default: ProfileOrg,
      footer: Footer
    },
    children: [{
        path: '',
        name: 'ckevent',
        components: {
          start: ckevent,
        }
      },
      {
        path: '/profileorg/active',
        name: 'ckevent',
        component: ckevent
      },
      {
        path: '/profileorg/addevent',
        name: 'addevent',
        component: Addevent
      },
      {
        path: '/profileorg/amound',
        name: 'amound',
        component: Amound
      },
    ],
  },
  {
    path: '/callback',
    name: 'callback',
    components: {
      default: Callback,
    }
  },
  {
    path: '/profileuser',
    name: 'profileuser',
    components: {
      header: Header,
      default: ProfileUser,
      footer: Footer
    },
    children:[
      { path : '/profileuser', name : 'formprofile',component : Formprofile },
      { path : '/profileuser/historys', name : 'historys',component : Historys },
    ],
  },
  {
    path: '/RegisterUser',
    name: 'registerUser',
    components: {
      header: Header,
      default: RegisterUser,
      footer: Footer
    }
  },
  {
    path: '/RegisterOrg',
    name: 'registerOrg',
    components: {
      header: Header,
      default: RegisterOrg,
      footer: Footer
    }
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter: (to, from, next) => {
      localStorage.clear()
      next('/')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

export default router