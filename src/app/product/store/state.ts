import {ProductStateInterface} from '../types/product-state.interface'

export const PRODUCT_FEATURE = 'product'

export const initialState: ProductStateInterface = {
  isLoading: false,
  product: null,
  backendErrors: null,
}
