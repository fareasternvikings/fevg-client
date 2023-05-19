import {ProductInterface} from '../../shared/types/product.interface'
import {BackendErrorsInterface} from '../../shared/types/backend-errors.interface'

export interface ProductStateInterface {
  isLoading: boolean
  product: ProductInterface | null
  backendErrors: BackendErrorsInterface | null
}
