import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {IndexPageInterface} from '../../types/index-page.interface'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'

export const getPageAction = createAction(ActionTypes.GET_PAGE)
export const getPageSuccessAction = createAction(
  ActionTypes.GET_PAGE_SUCCESS,
  props<{page: IndexPageInterface}>()
)
export const getPageFailureAction = createAction(
  ActionTypes.GET_PAGE_FAILURE,
  props<{backendErrors: BackendErrorsInterface}>()
)
