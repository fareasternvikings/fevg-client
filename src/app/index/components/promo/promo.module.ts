import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PromoComponent} from './promo.component'
import {TuiButtonModule} from '@taiga-ui/core'

@NgModule({
  declarations: [PromoComponent],
  imports: [CommonModule, TuiButtonModule],
  exports: [PromoComponent],
})
export class PromoModule {}
