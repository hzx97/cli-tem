import Layout from '@/Layout/index.vue'

export const routeMap  = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'/dataSet',
    children:[
      {
        path: "/dataSet",
        name: 'dataSet',
        component: () => import('@/Layout/dataSet'),
    },
    {
      path: "/dataLack",
      name: 'dataLack',
      component: () => import('@/Layout/dataLack'),
  },
  {
    path: "/myData",
    name: 'myData',
    component: () => import('@/Layout/myData'),
},
    ]
  },
]

export default routeMap