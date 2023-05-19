import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ProductInterface} from '../../../shared/types/product.interface'

export const removeProductAction = createAction(
  ActionTypes.REMOVE_PRODUCT,
  props<{product: ProductInterface}>()
)
export const removeProductSuccessAction = createAction(
  ActionTypes.REMOVE_PRODUCT_SUCCESS
)
export const removeProductFailureAction = createAction(
  ActionTypes.REMOVE_PRODUCT_FAILURE
)
