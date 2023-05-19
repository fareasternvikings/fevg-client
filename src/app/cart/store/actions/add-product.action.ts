import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ProductInterface} from '../../../shared/types/product.interface'

export const addProductAction = createAction(
  ActionTypes.ADD_PRODUCT,
  props<{product: ProductInterface}>()
)

export const addProductSuccessAction = createAction(
  ActionTypes.ADD_PRODUCT_SUCCESS
)

export const addProductFailureAction = createAction(
  ActionTypes.ADD_PRODUCT_FAILURE
)
