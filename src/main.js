import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home'
import Editor from './components/Editor'
import Story from './components/Story'

const routes = [
  { path: '/', component: Home },
  { path: '/editor', component: Editor },
  { path: '/story/:id', component: Story }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: createElement => createElement(App)
})
