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
import {
  TuiButtonModule,
  TuiLinkModule,
  TuiLoaderModule,
  TuiSvgModule,
} from '@taiga-ui/core'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'
import {SwiperModule} from 'swiper/angular'
import {ReactiveFormsModule} from '@angular/forms'
import {SizePickerModule} from '../shared/components/size-picker/size-picker.module'
import {ColorPickerModule} from '../shared/components/color-picker/color-picker.module'
import {PhotoViewerModule} from './components/photo-viewer/photo-viewer.module'

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
    ReactiveFormsModule,
    SizePickerModule,
    ColorPickerModule,
    PhotoViewerModule,
    TuiSvgModule,
  ],
  providers: [ProductsService],
})
export class ProductModule {}
