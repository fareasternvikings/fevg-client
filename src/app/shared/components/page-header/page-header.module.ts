import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PageHeaderComponent} from './page-header.component'
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core'
import {TuiBadgeModule} from '@taiga-ui/kit'
import {RouterLink} from '@angular/router'
import {LangModule} from '../lang/lang.module'
import {MainNavComponent} from './components/main-nav/main-nav.component'
import {MobileNavComponent} from './components/mobile-nav/mobile-nav.component'

@NgModule({
  declarations: [PageHeaderComponent, MainNavComponent, MobileNavComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiBadgeModule,
    RouterLink,
    LangModule,
  ],
  exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
