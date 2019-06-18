import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PlacesNew from './views/PlacesNew.vue'
import PlacesShow from './views/PlacesShow.vue'
import PlacesEdit from './views/PlacesEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/places/new',
      name: 'places-new',
      component: PlacesNew
    },
    {
      path: '/places/:id',
      name: 'places-show',
      component: PlacesShow
    },
    {
      path: '/places/:id/edit',
      name: 'places-edit',
      component: PlacesEdit
    }
  ]
})
