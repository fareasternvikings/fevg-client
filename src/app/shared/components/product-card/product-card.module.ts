import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductCardComponent} from './product-card.component'
import {TuiLetModule} from '@taiga-ui/cdk'

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, TuiLetModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
