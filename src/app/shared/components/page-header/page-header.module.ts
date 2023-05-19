import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageHeaderComponent} from './page-header.component'
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'
import {TuiBadgeModule} from '@taiga-ui/kit'
import {RouterLink} from '@angular/router'

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiBadgeModule,
    RouterLink,
  ],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
