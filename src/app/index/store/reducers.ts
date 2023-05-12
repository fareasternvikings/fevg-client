import {Action, createReducer, on} from '@ngrx/store'
import {initialState} from './state'
import {
  getPageAction,
  getPageFailureAction,
  getPageSuccessAction,
} from './actions/get-page.action'
import {IndexStateInterface} from '../types/index-state.interface'

const indexReducer = createReducer(
  initialState,
  on(
    getPageAction,
    (state): IndexStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPageSuccessAction,
    (state, {page}): IndexStateInterface => ({
      ...state,
      isLoading: false,
      page,
    })
  ),
  on(
    getPageFailureAction,
    (state, {backendErrors}): IndexStateInterface => ({
      ...state,
      isLoading: false,
      backendErrors,
    })
  )
)

export function reducers(state: IndexStateInterface, action: Action) {
  return indexReducer(state, action)
}
