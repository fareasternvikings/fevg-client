import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {StepOneInterface} from '../../types/step-one.interface'

export const setCurrentStepAction = createAction(
  ActionTypes.SET_CURRENT_STEP,
  props<{currentStep: number}>()
)

export const changeStepOneAction = createAction(
  ActionTypes.CHANGE_STEP_ONE,
  props<{stepOne: StepOneInterface}>()
)
