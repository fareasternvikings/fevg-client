import {Action, createReducer, on} from '@ngrx/store'
import {initialState} from './state'
import {changeStepOneAction, setCurrentStepAction} from './actions/index.action'
import {CheckoutStateInterface} from '../types/checkout.state'

export const checkoutReducers = createReducer(
  initialState,
  on(
    setCurrentStepAction,
    (state, {currentStep}): CheckoutStateInterface => ({
      ...state,
      currentStep,
    })
  ),
  on(
    changeStepOneAction,
    (state, {stepOne}): CheckoutStateInterface => ({
      ...state,
      stepOne,
    })
  )
)

export function reducers(state: CheckoutStateInterface, action: Action) {
  return checkoutReducers(state, action)
}
