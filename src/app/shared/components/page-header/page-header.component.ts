import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core'
import {TuiDialogService} from '@taiga-ui/core'
import {LoginComponent} from '../../../auth/components/login/login.component'
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus'
import {RegisterComponent} from '../../../auth/components/register/register.component'
import {select, Store} from '@ngrx/store'
import {logoutAction} from '../../../auth/store/actions/logout.action'
import {filter, map, Observable} from 'rxjs'
import {ProductInterface} from '../../types/product.interface'
import {cartProductsSelector} from '../../../cart/store/selectors'
import {openMobileMenuAction} from '../../../store/global/actions/mobile-menu.action'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent implements OnInit {
  productsCount$: Observable<number>

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private store: Store
  ) {}

  ngOnInit() {
    this.productsCount$ = this.store.pipe(
      select(cartProductsSelector),
      filter(Boolean),
      map((products: ProductInterface[]) => {
        return products.length
      })
    )
  }

  login() {
    this.dialogService
      .open<any>(new PolymorpheusComponent(LoginComponent, this.injector), {
        dismissible: true,
        closeable: true,
        size: 'm',
      })
      .subscribe()
  }

  register() {
    this.dialogService
      .open<any>(new PolymorpheusComponent(RegisterComponent, this.injector), {
        dismissible: true,
        closeable: true,
        size: 'm',
      })
      .subscribe()
  }

  logout() {
    this.store.dispatch(logoutAction())
  }

  changeLang(lang) {
    if (typeof lang === 'string') {
      console.log('lang', lang)
    }
  }

  openMobile() {
    this.store.dispatch(openMobileMenuAction())
  }

  openCart() {
    document.documentElement.classList.add('page--cart-opened')
  }
}
