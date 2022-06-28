import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import Home from '@/views/user/home/index'
// @ts-ignore
import Dashboard from '@/views/admin/dashboard/index'
// @ts-ignore
import Page from '@/views/admin/page/index'
// @ts-ignore
import User from '@/views/admin/user/index'
// @ts-ignore
import Login from '@/views/admin/authentication/login/index'
// @ts-ignore
import Register from '@/views/admin/authentication/register/index'
// @ts-ignore
import ChangePass from '@/views/admin/authentication/change-password/index'
// @ts-ignore
import Profile from '@/views/admin/authentication/profile/index'
// @ts-ignore
import LoginUser from '@/views/user/authentication/login/index'
// @ts-ignore
import RegisterUser from '@/views/user/authentication/register/index'
// @ts-ignore
import ChangePassUser from '@/views/user/authentication/change-password/index'
// @ts-ignore
import ProfileUser from '@/views/user/authentication/profile/index'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'login-user',
    component: LoginUser,
  },
  {
    path: '/user/register',
    name: 'register-user',
    component: RegisterUser,
  },
  {
    path: '/user/change-password',
    name: 'change-password-user',
    component: ChangePassUser,
  },
  {
    path: '/user/profile',
    name: 'profile-user',
    component: ProfileUser,
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/page',
    name: 'page',
    component: Page,
  },
  {
    path: '/admin/user',
    name: 'user',
    component: User,
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/admin/change-password',
    name: 'change-password',
    component: ChangePass,
  },
  {
    path: '/admin/profile',
    name: 'profile',
    component: Profile,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
