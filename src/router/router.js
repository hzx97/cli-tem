import Layout from '../Layout/index.vue'

export const routeMap  = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },{
    path:'/login',
    component:()=>import('@/views/Login.vue')
  }
]

export default routeMap