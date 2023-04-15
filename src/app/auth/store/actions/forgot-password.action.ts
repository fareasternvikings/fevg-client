import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../action-types'
import {ForgotPasswordRequestInterface} from '../../types/forgot-password-request.interface'
import {ForgotPasswordResponseInterface} from '../../types/forgot-password-response.interface'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'

export const forgotPasswordAction = createAction(
  ActionTypes.FORGOT_PASSWORD,
  props<ForgotPasswordRequestInterface>()
)

export const forgotPasswordSuccessAction = createAction(
  ActionTypes.FORGOT_PASSWORD_SUCCESS,
  props<{response: ForgotPasswordResponseInterface}>()
)

export const forgotPasswordFailureAction = createAction(
  ActionTypes.FORGOT_PASSWORD_FAILURE,
  props<{backendErrors: BackendErrorsInterface}>()
)
