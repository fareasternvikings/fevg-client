import {createFeatureSelector, createSelector} from '@ngrx/store'
import {PRODUCT_FEATURE} from './state'
import {ProductStateInterface} from '../types/product-state.interface'

export const productFeatureSelector =
  createFeatureSelector<ProductStateInterface>(PRODUCT_FEATURE)

export const isLoadingSelector = createSelector(
  productFeatureSelector,
  ({isLoading}: ProductStateInterface) => isLoading
)

export const productSelector = createSelector(
  productFeatureSelector,
  ({product}: ProductStateInterface) => product
)

export const backendErrorsSelector = createSelector(
  productFeatureSelector,
  ({backendErrors}: ProductStateInterface) => backendErrors
)
