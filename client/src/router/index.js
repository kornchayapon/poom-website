import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// user component
import Users from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserView from '@/components/Users/ViewUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    // users
    {
      path: '/users',
      name: 'user',
      component: Users
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/view',
      name: 'user-view',
      component: UserView
    }
  ]
})
