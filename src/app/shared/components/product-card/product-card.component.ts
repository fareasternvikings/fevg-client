import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {ProductInterface} from '../../types/product.interface'
import {environment} from '../../../../environments/environment'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() product: ProductInterface

  setImageUrl(url) {
    return environment.uploadUrl + url
  }
}
