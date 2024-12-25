import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/UserProducts.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProductDetail.vue')
      },
      {
        path: 'loves',
        component: () => import('../views/UserLove.vue')
      },
      {
        path: 'checkform',
        component: () => import('../views/UserCheckForm.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/UserOrders.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckout.vue')
      },
      {
        path: 'user/login',
        component: () => import('../views/UserLogin.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/BackLogin.vue')
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/BackBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/BackProducts.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/BackCoupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/BackOrders.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/UserBoard.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/HomeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
