import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/frontend/UserBoard.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/frontend/HomeView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontend/UserProducts.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/frontend/UserProductDetail.vue')
      },
      {
        path: 'loves',
        component: () => import('../views/frontend/UserLove.vue')
      },
      {
        path: 'checkform',
        component: () => import('../views/frontend/UserCheckForm.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/frontend/UserOrders.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/frontend/UserCheckout.vue')
      },
      {
        path: 'user/login',
        component: () => import('../views/frontend/UserLogin.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/backend/BackLogin.vue')
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/backend/BackBoard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/BackProducts.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/BackCoupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/backend/BackOrders.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/frontend/UserBoard.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/frontend/HomeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
