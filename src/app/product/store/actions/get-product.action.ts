import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ProductInterface} from '../../../shared/types/product.interface'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'

export const getProductAction = createAction(
  ActionTypes.GET_PRODUCT,
  props<{id: string}>()
)

export const getProductSuccessAction = createAction(
  ActionTypes.GET_PRODUCT_SUCCESS,
  props<{product: ProductInterface}>()
)

export const getProductFailureAction = createAction(
  ActionTypes.GET_PRODUCT_FAILURE,
  props<{backendErrors: BackendErrorsInterface}>()
)
