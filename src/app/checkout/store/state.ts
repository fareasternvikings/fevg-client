import {CheckoutStateInterface} from '../types/checkout.state'

export const CHECKOUT_FEATURE = 'checkout'

export const initialState: CheckoutStateInterface = {
  currentStep: 0,
  finishedSteps: {},
  validSteps: {},
  stepOne: null,
  stepTwo: null,
  stepThree: null,
}
