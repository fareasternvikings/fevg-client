import {createFeatureSelector, createSelector} from '@ngrx/store'
import {
  PRODUCTS_FEATURE,
  productsAdapter,
  ProductsStateInterface,
} from './state'
import {Dictionary} from '@ngrx/entity'
import {ProductInterface} from '../../shared/types/product.interface'

export const productsFeatureSelector =
  createFeatureSelector<ProductsStateInterface>(PRODUCTS_FEATURE)

export const isLoadingSelector = createSelector(
  productsFeatureSelector,
  ({isLoading}: ProductsStateInterface) => isLoading
)

export const backendErrorsSelector = createSelector(
  productsFeatureSelector,
  ({backendErrors}: ProductsStateInterface) => backendErrors
)

export const {selectAll: productsSelector, selectEntities} =
  productsAdapter.getSelectors(productsFeatureSelector)

export const productByIdSelector = (id: string) => {
  return createSelector(
    selectEntities,
    (entities: Dictionary<ProductInterface>) => entities[id]
  )
}
