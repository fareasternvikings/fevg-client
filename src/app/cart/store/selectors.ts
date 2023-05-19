import {CART_FEATURE, cartAdapter, CartStateInterface} from './state'
import {createFeatureSelector, createSelector} from '@ngrx/store'

export const cartFeatureSelector =
  createFeatureSelector<CartStateInterface>(CART_FEATURE)

export const isSubmittingSelector = createSelector(
  cartFeatureSelector,
  ({isSubmitting}: CartStateInterface) => isSubmitting
)

export const {selectAll: cartProductsSelector} =
  cartAdapter.getSelectors(cartFeatureSelector)
