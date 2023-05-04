import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {IndexComponent} from './index.component'
import {IndexRoutingModule} from './index-routing.module'
import {HeroModule} from './components/hero/hero.module'

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, HeroModule],
})
export class IndexModule {}
