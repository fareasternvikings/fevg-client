import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {ProductInterface} from '../../../shared/types/product.interface'
import {SwiperOptions} from 'swiper'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  @Input() products: ProductInterface[]

  config: SwiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    pagination: {clickable: true},
  }
}
