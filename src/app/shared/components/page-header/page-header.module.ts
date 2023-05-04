import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageHeaderComponent} from './page-header.component'
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, TuiButtonModule, TuiLinkModule, TuiSvgModule],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
