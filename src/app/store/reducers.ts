import {globalReducer} from './global/reducer'
import {GLOBAL_FEATURE} from './global/state'
import {GlobalStateInterface} from './global/types/global-state.interface'
import {PRODUCTS_FEATURE, ProductsStateInterface} from './products/state'
import {productsReducer} from './products/reducer'

export interface State {
  [GLOBAL_FEATURE]: GlobalStateInterface
  [PRODUCTS_FEATURE]: ProductsStateInterface
}

export const reducers = {
  [GLOBAL_FEATURE]: globalReducer,
  [PRODUCTS_FEATURE]: productsReducer,
}
