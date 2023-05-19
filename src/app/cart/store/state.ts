import {createEntityAdapter, EntityState} from '@ngrx/entity'
import {ProductInterface} from '../../shared/types/product.interface'

export const CART_FEATURE = 'cart'

export interface CartStateInterface extends EntityState<ProductInterface> {
  isSubmitting: boolean
}

export const cartAdapter = createEntityAdapter({
  selectId: ({id}: ProductInterface) => id,
})

export const initialState: CartStateInterface = cartAdapter.getInitialState({
  isSubmitting: false,
})
