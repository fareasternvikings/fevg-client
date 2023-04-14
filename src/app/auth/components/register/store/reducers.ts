import {Action, createReducer, on} from '@ngrx/store'
import {initialState} from './state'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import {AuthStateInterface} from '../types/auth-state.interface'

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
      isLoggedIn: false,
      currentUser: null,
      backendErrors,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
