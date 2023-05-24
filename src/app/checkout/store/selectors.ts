import {createFeatureSelector, createSelector} from '@ngrx/store'
import {CHECKOUT_FEATURE} from './state'
import {CheckoutStateInterface} from '../types/checkout.state'

export const checkoutFeatureSelector =
  createFeatureSelector<CheckoutStateInterface>(CHECKOUT_FEATURE)

export const currentStepSelector = createSelector(
  checkoutFeatureSelector,
  (state: CheckoutStateInterface) => state.currentStep
)

export const stepOneSelector = createSelector(
  checkoutFeatureSelector,
  (state: CheckoutStateInterface) => state.stepOne
)
