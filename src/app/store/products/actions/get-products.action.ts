import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ProductInterface} from '../../../shared/types/product.interface'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS)

export const getProductsSuccessAction = createAction(
  ActionTypes.GET_PRODUCTS_SUCCESS,
  props<{products: ProductInterface[]}>()
)

export const getProductsFailureAction = createAction(
  ActionTypes.GET_PRODUCTS_FAILURE,
  props<{backendErrors: BackendErrorsInterface}>()
)
