import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductionComponent} from './production.component'

@NgModule({
  declarations: [ProductionComponent],
  imports: [CommonModule],
  exports: [ProductionComponent],
})
export class ProductionModule {}
