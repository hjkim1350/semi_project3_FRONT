import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Mbti from '../views/dashboard/Mbti.vue'
import AddMbti from '../views/dashboard/AddMbti.vue'
import MbtiDetail from '../views/dashboard/MbtiDetail.vue'
import Communities from '../views/dashboard/Communities.vue'
import AddCommunity from '../views/dashboard/AddCommunity.vue'
import Community from '../views/dashboard/Community.vue'
import EditCommunity from '../views/dashboard/EditCommunity.vue'
import Friends from '../views/dashboard/Friends.vue'
import AddFriends from '../views/dashboard/AddFriends.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/mbti',
    name: 'Mbti',
    component: Mbti,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/mbti/add',
    name: 'AddMbti',
    component: AddMbti,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/mbti/:id',
    name: 'MbtiDetail',
    component: MbtiDetail,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/community',
    name: 'Communities',
    component: Communities,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/community/add',
    name: 'AddCommunity',
    component: AddCommunity,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/community/:id',
    name: 'Community',
    component: Community,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/community/:id/edit',
    name: 'EditCommunity',
    component: EditCommunity,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/friends',
    name: 'Friends',
    component: Friends,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/friends/add',
    name: 'AddFriends',
    component: AddFriends,
    meta: {
      requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
