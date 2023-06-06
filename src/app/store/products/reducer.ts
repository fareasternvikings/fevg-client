import {Action, createReducer, on} from '@ngrx/store'
import {initialState, productsAdapter, ProductsStateInterface} from './state'
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from './actions/get-product.action'
import {
  getProductsAction,
  getProductsSuccessAction,
} from './actions/get-products.action'

export const reducer = createReducer(
  initialState,
  on(
    getProductsAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getProductsSuccessAction,
    (state, {products}): ProductsStateInterface =>
      productsAdapter.upsertMany(products, {
        ...state,
        isLoading: false,
      })
  ),
  on(
    getProductFailureAction,
    (state, {backendErrors}): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      backendErrors,
    })
  ),
  on(
    getProductAction,
    (state): ProductsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getProductSuccessAction,
    (state, {product}): ProductsStateInterface =>
      productsAdapter.upsertOne(product, {
        ...state,
        isLoading: false,
      })
  ),
  on(
    getProductFailureAction,
    (state, {backendErrors}): ProductsStateInterface => ({
      ...state,
      isLoading: false,
      backendErrors,
    })
  )
)

export function productsReducer(state: ProductsStateInterface, action: Action) {
  return reducer(state, action)
}
