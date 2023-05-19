import {ModuleWithProviders, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CartComponent} from './cart.component'
import {CartRoutingModule} from './cart-routing.module'
import {StoreModule} from '@ngrx/store'
import {CART_FEATURE} from './store/state'
import {reducers} from './store/reducers'
import {TuiCheckboxModule, TuiInputCountModule} from '@taiga-ui/kit'
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core'
import {TuiLetModule} from '@taiga-ui/cdk'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature(CART_FEATURE, reducers),
    TuiCheckboxModule,
    TuiInputCountModule,
    TuiSvgModule,
    TuiLetModule,
    TuiButtonModule,
    TuiCurrencyPipeModule,
  ],
})
export class CartModule {
  static forRoot(): ModuleWithProviders<CartModule> {
    return {
      ngModule: CartModule,
    }
  }
}
