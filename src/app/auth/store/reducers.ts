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
  on(loginSuccessAction, (state, {currentUser}) => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser,
  })),
  on(loginFailureAction, (state, {backendErrors}) => ({
    ...state,
    isSubmitting: false,
    backendErrors,
  }))
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
