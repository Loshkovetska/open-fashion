import { storeToRefs } from 'pinia'

export function useStore<T>(cb: T) {
  const store = cb()
  const state = storeToRefs(store)

  return { state, store }
}
