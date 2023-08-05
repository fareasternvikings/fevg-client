import {NgModule} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {ProductCardComponent} from './product-card.component'
import {TuiLetModule} from '@taiga-ui/cdk'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    TuiLetModule,
    TuiCurrencyPipeModule,
    RouterModule,
    NgOptimizedImage,
  ],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
