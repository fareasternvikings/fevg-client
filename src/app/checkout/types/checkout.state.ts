import {StepOneInterface} from './step-one.interface'
import {DeliveryInterface} from './delivery.interface'
import {PaymentInterface} from './payment.interface'

export interface CheckoutStateInterface {
  currentStep: number
  finishedSteps: {
    [key: number]: boolean
  }
  validSteps: {
    [key: number]: boolean
  }
  stepOne: StepOneInterface | null
  stepTwo: DeliveryInterface | null
  stepThree: PaymentInterface | null
}
