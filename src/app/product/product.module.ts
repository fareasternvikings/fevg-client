import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductComponent} from './product.component'
import {ProductRoutingModule} from './product-routing.module'
import {ProductsService} from '../shared/services/products.service'
import {StoreModule} from '@ngrx/store'
import {PRODUCT_FEATURE} from './store/state'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetProductEffect} from './store/effects/get-product.effect'
import {TuiButtonModule, TuiLinkModule, TuiLoaderModule} from '@taiga-ui/core'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'
import {SwiperModule} from 'swiper/angular'

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(PRODUCT_FEATURE, reducers),
    EffectsModule.forFeature([GetProductEffect]),
    TuiLoaderModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiCurrencyPipeModule,
    SwiperModule,
  ],
  providers: [ProductsService],
})
export class ProductModule {}
