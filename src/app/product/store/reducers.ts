import {Action, createReducer, on} from '@ngrx/store'
import {initialState} from './state'
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from './actions/get-product.action'
import {ProductStateInterface} from '../types/product-state.interface'

export const productReducer = createReducer(
  initialState,
  on(
    getProductAction,
    (state): ProductStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getProductSuccessAction,
    (state, {product}): ProductStateInterface => ({
      ...state,
      isLoading: false,
      product,
    })
  ),
  on(
    getProductFailureAction,
    (state, {backendErrors}): ProductStateInterface => ({
      ...state,
      isLoading: false,
      backendErrors,
    })
  )
)

export function reducers(state: ProductStateInterface, action: Action) {
  return productReducer(state, action)
}
