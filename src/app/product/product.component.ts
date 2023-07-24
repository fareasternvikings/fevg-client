import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
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
import {FormControl} from '@angular/forms'
import {DialogService} from '../shared/components/dialog/dialog.service'
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  isLoading$: Observable<boolean>
  product$: Observable<ProductInterface | undefined>
  backendErrors$: Observable<BackendErrorsInterface | null>

  color = new FormControl('')
  size = new FormControl('')

  Activities = {
    yachting: 'Яхтинг',
    windsurfing: 'Виндсерфинг',
    surfing: 'Серфинг',
    wakeboarding: 'Вейкбординг',
    kiting: 'Кайтинг',
    'sup-surfing': 'Сап-серфинг',
  }

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
    private store: Store,
    @Inject(DialogService) private readonly promptService: DialogService
  ) {}

  ngOnInit(): void {
    this.initValues()
  }

  initValues() {
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.backendErrors$ = this.store.select(backendErrorsSelector)

    console.log('hello')

    this.product$ = this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id') as string),
      tap((id: string) => {
        console.log('id', id)
        this.store.dispatch(getProductAction({id}))
      }),
      switchMap(() => {
        return this.store.select(productSelector)
      }),
      tap((product) => {
        console.log('product', product)
      })
    )

    this.color.valueChanges.subscribe((value) => {
      console.log('color value', value)
    })

    this.size.valueChanges.subscribe((value) => {
      console.log('size value', value)
    })
  }

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  addProduct(product: ProductInterface) {
    this.store.dispatch(addProductAction({product}))
    document.documentElement.classList.add('page--cart-opened')
  }

  removeProduct(product: ProductInterface) {
    this.store.dispatch(removeProductAction({product}))
  }

  clearCart() {
    this.store.dispatch(clearCartAction())
  }

  onClick(
    choose: PolymorpheusContent,
    poorly: PolymorpheusContent,
    wisely: PolymorpheusContent
  ): void {
    this.promptService
      .open(choose, {
        heading: 'Taiga UI is the best',
        buttons: ['Absolutely!', 'No way!'],
      })
      .pipe(
        tap(() => {
          console.log('tap')
        })
      )
      .subscribe()
  }
}
