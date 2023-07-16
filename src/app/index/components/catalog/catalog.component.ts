import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import SwiperCore, {Pagination, SwiperOptions} from 'swiper'
import {ProductInterface} from '../../../shared/types/product.interface'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isLargeScreenSelector} from '../../../store/global/selectors'

SwiperCore.use([Pagination])

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  @Input() products: ProductInterface[]
  isLargeScreen$: Observable<boolean>

  constructor(private store: Store) {}

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
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {clickable: true},
  }

  ngOnInit(): void {
    this.isLargeScreen$ = this.store.select(isLargeScreenSelector)
  }
}
