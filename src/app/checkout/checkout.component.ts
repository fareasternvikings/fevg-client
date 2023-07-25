import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  Self,
} from '@angular/core'
import {ProductInterface} from '../shared/types/product.interface'
import {filter, Observable, takeUntil, tap} from 'rxjs'
import {Store} from '@ngrx/store'
import {cartProductsSelector} from '../cart/store/selectors'
import {environment} from '../../environments/environment'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'
import {TuiDestroyService} from '@taiga-ui/cdk'
import {setCurrentStepAction} from './store/actions/index.action'
import {currentStepSelector} from './store/selectors'
import {NavigationStart, Router, RouterEvent} from '@angular/router'
import {removeProductAction} from '../cart/store/actions/remove-product.action'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Заполните`,
        email: `Некорректный email`,
        minlength: (error) => {
          return `Минимум ${error.requiredLength} символа`
        },
        pattern: (error) => {
          return `Только буквы`
        },
        phoneLength: (error) => {
          return `Нeкорректный номер`
        },
      },
    },
    TuiDestroyService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  products$: Observable<ProductInterface[]>
  currentStep$: Observable<number>

  constructor(
    private store: Store,
    private router: Router,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService
  ) {}

  ngOnInit(): void {
    this.initValues()
  }

  initValues() {
    this.products$ = this.store.select(cartProductsSelector)
    this.currentStep$ = this.store.select(currentStepSelector)

    this.navigate(this.router.url)

    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        tap((event: RouterEvent) => {
          this.navigate(event.url)
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe()
  }

  navigate(url: string): void {
    this.store.dispatch(
      setCurrentStepAction({currentStep: +url.split('/').pop()})
    )
  }

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  removeProduct(product: ProductInterface) {
    this.store.dispatch(removeProductAction({product}))
  }

  changeCurrentStep(currentStep) {
    this.store.dispatch(setCurrentStepAction({currentStep}))
  }

  goTo(currentStep: number | string) {
    return currentStep.toString()
  }
}
