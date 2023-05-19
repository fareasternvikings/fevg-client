import {ChangeDetectionStrategy, Component} from '@angular/core'
import {map, Observable, switchMap, tap} from 'rxjs'
import {ProductInterface} from '../shared/types/product.interface'
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {BackendErrorsInterface} from '../shared/types/backend-errors.interface'
import {
  backendErrorsSelector,
  isLoadingSelector,
  productSelector,
} from './store/selectors'
import {getProductAction} from './store/actions/get-product.action'
import {environment} from '../../environments/environment'
import {SwiperOptions} from 'swiper'
import {addProductAction} from '../cart/store/actions/add-product.action'
import {removeProductAction} from '../cart/store/actions/remove-product.action'
import {clearCartAction} from '../cart/store/actions/clear-cart.action'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  isLoading$: Observable<boolean>
  product$: Observable<ProductInterface | undefined>
  backendErrors$: Observable<BackendErrorsInterface | null>

  config_1: SwiperOptions = {
    spaceBetween: 10,
    // thumbs: {
    //   swiper:
    // },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //   },
    //   600: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //   },
    //   920: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    // },
    // pagination: {clickable: true},
  }

  config_2: SwiperOptions = {
    watchSlidesProgress: true,
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 10,
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initValues()
  }

  initValues() {
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.backendErrors$ = this.store.select(backendErrorsSelector)

    this.product$ = this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id') as string),
      tap((id: string) => {
        this.store.dispatch(getProductAction({id}))
      }),
      switchMap(() => {
        return this.store.select(productSelector)
      }),
      tap((product) => {
        console.log('product', product)
      })
    )
  }

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  addProduct(product: ProductInterface) {
    this.store.dispatch(addProductAction({product}))
  }

  removeProduct(product: ProductInterface) {
    this.store.dispatch(removeProductAction({product}))
  }

  clearCart() {
    this.store.dispatch(clearCartAction())
  }
}
