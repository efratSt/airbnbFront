import { createRouter, createWebHashHistory } from 'vue-router'

import chat from './views/chat.vue'
import stayApp from './views/stay-app.vue'
import loginSignup from './views/login-signup.vue'
import userDetails from './views/user-details.vue'
import stayDetails from './views/stay-details.vue'

const routes = [
  {
    path: '/',
    name: 'stay-app',
    component: stayApp
  },
  {
    path: '/stay/:id',
    name: 'stay-details',
    component: stayDetails
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/login',
    name: 'loginSignup',
    component: loginSignup
  },
  {
    path: '/user/:id',
    name: 'user-details',
    component: userDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

