import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageFooterComponent} from './page-footer.component'
import {TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'
import {RouterLink} from '@angular/router'

@NgModule({
  declarations: [PageFooterComponent],
  imports: [CommonModule, TuiSvgModule, RouterLink, TuiLinkModule],
  exports: [PageFooterComponent],
})
export class PageFooterModule {}
