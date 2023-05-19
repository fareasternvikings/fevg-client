import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {filter, Observable, tap} from 'rxjs'
import {ProductInterface} from '../shared/types/product.interface'
import {cartProductsSelector} from './store/selectors'
import {environment} from '../../environments/environment'
import {removeProductAction} from './store/actions/remove-product.action'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  products$: Observable<ProductInterface[]>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues()
  }

  initValues() {
    this.products$ = this.store.pipe(
      select(cartProductsSelector),
      filter(Boolean),
      tap((product) => {
        console.log('product', product)
      })
    )
  }

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  removeProduct(product: ProductInterface) {
    this.store.dispatch(removeProductAction({product}))
  }

  calcTotalSum(products: ProductInterface[]) {
    return products.reduce((sum: number, product: ProductInterface) => {
      sum += product.attributes.price
      return sum
    }, 0)
  }
}
