import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CatalogComponent} from './catalog.component'
import {ProductCardModule} from '../../../shared/components/product-card/product-card.module'
import {SwiperModule} from 'swiper/angular'
import {TuiLoaderModule} from '@taiga-ui/core'

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, SwiperModule, ProductCardModule, TuiLoaderModule],
  exports: [CatalogComponent],
})
export class CatalogModule {}
