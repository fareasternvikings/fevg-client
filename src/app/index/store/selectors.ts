import {createFeatureSelector, createSelector} from '@ngrx/store'
import {INDEX_FEATURE} from './state'
import {IndexStateInterface} from '../types/index-state.interface'

export const indexFeatureSelector =
  createFeatureSelector<IndexStateInterface>(INDEX_FEATURE)

export const isLoadingSelector = createSelector(
  indexFeatureSelector,
  ({isLoading}: IndexStateInterface) => isLoading
)

export const pageSelector = createSelector(
  indexFeatureSelector,
  ({page}: IndexStateInterface) => page
)

export const backendErrorsSelector = createSelector(
  indexFeatureSelector,
  ({backendErrors}: IndexStateInterface) => backendErrors
)
