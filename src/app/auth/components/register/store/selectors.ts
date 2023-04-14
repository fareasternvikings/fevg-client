import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AUTH_FEATURE} from './state'
import {AuthStateInterface} from '../types/auth-state.interface'

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(AUTH_FEATURE)

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting
)

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoading
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoggedIn
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoggedIn === false
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.currentUser
)
