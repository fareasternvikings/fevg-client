import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageHeaderComponent} from './page-header.component'
import {TuiButtonModule} from '@taiga-ui/core'

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, TuiButtonModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
