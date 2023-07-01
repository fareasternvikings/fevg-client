import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductCardComponent} from './product-card.component'
import {TuiLetModule} from '@taiga-ui/cdk'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, TuiLetModule, TuiCurrencyPipeModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
