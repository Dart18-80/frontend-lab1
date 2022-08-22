import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DeleteView from '../views/DeleteView.vue'
import EditView from '../views/EditView.vue'
import SearchView from '../views/SearchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/delete',
    name: 'delete',
    component: DeleteView
  },
  {
    path: '/edit',
    name: 'edit',
    component: EditView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
