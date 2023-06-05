import {Action, createReducer, on} from '@ngrx/store'
import {changePageScrollStateAction} from './actions/change-page-scroll-state.action'
import {changeScreenSizeAction} from './actions/change-screen-size.action'
import {initialState} from './state'
import {GlobalStateInterface} from './types/global-state.interface'
import {
  closeMobileMenuAction,
  openMobileMenuAction,
} from './actions/mobile-menu.action'

const reducer = createReducer(
  initialState,
  on(changeScreenSizeAction, (state: GlobalStateInterface, {screenSize}) => ({
    ...state,
    screenSize,
  })),
  on(openMobileMenuAction, (state: GlobalStateInterface) => ({
    ...state,
    isMobileMenuOpened: true,
  })),
  on(closeMobileMenuAction, (state: GlobalStateInterface) => ({
    ...state,
    isMobileMenuOpened: false,
  })),
  on(
    changePageScrollStateAction,
    (state: GlobalStateInterface, {isBlocked}) => ({
      ...state,
      isPageScrollBlocked: isBlocked,
    })
  )
)

export function globalReducer(state: GlobalStateInterface, action: Action) {
  return reducer(state, action)
}
