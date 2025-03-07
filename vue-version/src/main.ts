import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueAwesomePaginate from 'vue-awesome-paginate'

import App from './App.vue'
import router from './router'

import 'vue-awesome-paginate/dist/style.css'
import { useCartStore, useGlobalStore, useProductStore } from './stores'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)

app.mount('#app')

router.beforeEach((guard) => {
  const cartStore = useCartStore()
  const productStore = useProductStore()
  const globalStore = useGlobalStore()

  globalStore.$reset()
  cartStore.setList()

  if (guard.name === 'product') {
    productStore.getProduct(Number(guard.params.id))
  }

  if (guard.name === 'products' && guard.query?.q) {
    productStore.updateFilters({ ...productStore.filters, q: guard.query?.q as string })
  }
  productStore.getAllProducts()
})
