import {ProductInterface} from '../../shared/types/product.interface'

export interface CartStateInterface {
  isSubmitting: boolean
  products: ProductInterface[]
}
