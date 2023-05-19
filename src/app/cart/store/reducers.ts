import {Action, createReducer, on} from '@ngrx/store'
import {
  addProductAction,
  addProductFailureAction,
  addProductSuccessAction,
} from './actions/add-product.action'
import {cartAdapter, CartStateInterface, initialState} from './state'
import {
  removeProductAction,
  removeProductFailureAction,
  removeProductSuccessAction,
} from './actions/remove-product.action'
import {
  clearCartAction,
  clearCartFailureAction,
  clearCartSuccessAction,
} from './actions/clear-cart.action'

export const cartReducer = createReducer(
  initialState,
  on(
    addProductAction,
    (state, {product}): CartStateInterface =>
      cartAdapter.upsertOne(product, {
        ...state,
        isSubmitting: true,
      })
  ),
  on(
    addProductSuccessAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    addProductFailureAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    removeProductAction,
    (state, {product}): CartStateInterface =>
      cartAdapter.removeOne(product.id, {
        ...state,
        isSubmitting: true,
      })
  ),
  on(
    removeProductSuccessAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    removeProductFailureAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    clearCartAction,
    (state): CartStateInterface => cartAdapter.removeAll({...state, id: null})
  ),
  on(
    clearCartSuccessAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    clearCartFailureAction,
    (state): CartStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  )
)

export function reducers(state: CartStateInterface, action: Action) {
  return cartReducer(state, action)
}
