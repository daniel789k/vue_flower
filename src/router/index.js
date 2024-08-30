import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserBoard.vue'),
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
    component: () => import(/* webpackChunkName: "about" */ '../views/BackBoard.vue'),
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
