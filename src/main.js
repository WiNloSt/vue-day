import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Foo from './components/Foo'
import CartoonViewer from './components/CartoonViewer'

Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }

const routes = [
  {
    path: '/foo',
    component: Foo,
    children: [
      { path: 'bar', component: Bar }
    ]
  },
  { path: '/cartoon', component: CartoonViewer }
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
