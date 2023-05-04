import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {IndexComponent} from './index.component'
import {IndexRoutingModule} from './index-routing.module'
import {HeroModule} from './components/hero/hero.module'
import {CatalogModule} from './components/catalog/catalog.module'
import {PromoModule} from './components/promo/promo.module'

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HeroModule,
    CatalogModule,
    PromoModule,
  ],
})
export class IndexModule {}
