import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Create from './components/Create.vue'
import Home from './components/Home.vue'
import Show from './components/Show.vue'
import Edit from './components/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/create',
    component:Create
  },
  {
    name:'Show',
    path:'/show/:id',
    component:Show
  },
  {
    name:'Edit',
    path:'/edit/:id',
    component:Edit
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
