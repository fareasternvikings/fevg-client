import {Action, createReducer, on} from '@ngrx/store'
import {initialState} from './state'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import {AuthStateInterface} from '../types/auth-state.interface'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/get-current-user.action'
import {logoutAction} from './actions/logout.action'
import {
  forgotPasswordAction,
  forgotPasswordFailureAction,
  forgotPasswordSuccessAction,
} from './actions/forgot-password.action'
import {
  resetPasswordAction,
  resetPasswordFailureAction,
  resetPasswordSuccessAction,
} from './actions/reset-password.action'

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, {currentUser}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, {backendErrors}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      backendErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, {currentUser}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, {backendErrors}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, {currentUser}): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),
  on(
    forgotPasswordAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    forgotPasswordSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    forgotPasswordFailureAction,
    (state, {backendErrors}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors,
    })
  ),
  on(
    resetPasswordAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    resetPasswordSuccessAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    resetPasswordFailureAction,
    (state, {backendErrors}): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      backendErrors,
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      ...initialState,
      isLoggedIn: false,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
