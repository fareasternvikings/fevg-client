import {createAction} from '@ngrx/store'
import {ActionTypes} from '../action-types'

export const openMobileMenuAction = createAction(ActionTypes.OPEN_MOBILE_MENU)
export const closeMobileMenuAction = createAction(ActionTypes.CLOSE_MOBILE_MENU)
