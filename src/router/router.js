import Layout from '@/Layout/index.vue'


export const routerMap = [{
    path: '/',
    name: 'main',
    component: Layout,
    redirect: {
      path: '/studio'
    },
    children: [{
        path: '/studio',
        name: 'studio',
        component: () => import('@/views/Studio')
      }, {
        path: '/map',
        name: 'map',
        component: () => import('@/views/Map')
      }, {
        path: '/mining',
        name: 'mining',
        component: () => import('@/views/Mining'),

      },
      {
        path: '/more',
        name: 'more',
        component: () => import('@/views/More'),

      },

    ]
  },
  {
    path: '*',
    name: 'errer_404',
    component: () => import('@/views/error_404.vue'),
    meta: {
      public: true
    }
  }

]


export const openRouter = [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      public: true
    }
  },

]

export default routerMap