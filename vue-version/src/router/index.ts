import CheckoutPage from '@/views/checkout-page.vue'
import Home from '@/views/home-page.vue'
import SingleProduct from '@/views/product-page.vue'
import Products from '@/views/products-page.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: SingleProduct,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
