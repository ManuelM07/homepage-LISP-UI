import { createRouter, createWebHistory } from 'vue-router'
import profile from '../components/test.vue'
const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: profile
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router