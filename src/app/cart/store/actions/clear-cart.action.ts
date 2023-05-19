import {createAction} from '@ngrx/store'
import {ActionTypes} from '../action-types'

export const clearCartAction = createAction(ActionTypes.CLEAR_CART)
export const clearCartSuccessAction = createAction(
  ActionTypes.CLEAR_CART_SUCCESS
)
export const clearCartFailureAction = createAction(
  ActionTypes.CLEAR_CART_FAILURE
)
