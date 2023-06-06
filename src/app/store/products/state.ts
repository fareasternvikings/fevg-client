import {createEntityAdapter, EntityState} from '@ngrx/entity'
import {ProductInterface} from '../../shared/types/product.interface'
import {BackendErrorsInterface} from '../../shared/types/backend-errors.interface'

export const PRODUCTS_FEATURE = 'products'

export interface ProductsStateInterface extends EntityState<ProductInterface> {
  isLoading: boolean
  backendErrors: BackendErrorsInterface | null
}

export const productsAdapter = createEntityAdapter({
  selectId: ({id}: ProductInterface) => id,
})

export const initialState: ProductsStateInterface =
  productsAdapter.getInitialState({
    isLoading: false,
    backendErrors: null,
  })
