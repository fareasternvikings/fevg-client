import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ResetPasswordRequestInterface} from '../../types/reset-password-request.interface'
import {ResetPasswordResponseInterface} from '../../types/reset-password-response.interface'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'

export const resetPasswordAction = createAction(
  ActionTypes.RESET_PASSWORD,
  props<{request: ResetPasswordRequestInterface}>()
)

export const resetPasswordSuccessAction = createAction(
  ActionTypes.RESET_PASSWORD_SUCCESS,
  props<{response: ResetPasswordResponseInterface}>()
)

export const resetPasswordFailureAction = createAction(
  ActionTypes.RESET_PASSWORD_FAILURE,
  props<{backendErrors: BackendErrorsInterface}>()
)
