import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {IndexComponent} from './index.component'
import {IndexRoutingModule} from './index-routing.module'
import {HeroModule} from './components/hero/hero.module'
import {CatalogModule} from './components/catalog/catalog.module'
import {PromoModule} from './components/promo/promo.module'
import {FeaturesComponent} from './components/features/features.component'
import {AboutModule} from './components/about/about.module'
import {TuiSvgModule} from '@taiga-ui/core'
import {TeamModule} from './components/team/team.module'
import {ProductionModule} from './components/production/production.module'
import {IndexPageService} from './services/index-page.service'
import {StoreModule} from '@ngrx/store'
import {INDEX_FEATURE} from './store/state'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPageEffect} from './store/effects/get-page.effect'
import {TuiLetModule} from '@taiga-ui/cdk'
import {IndexResolver} from './index.resolver'

@NgModule({
  declarations: [IndexComponent, FeaturesComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HeroModule,
    CatalogModule,
    PromoModule,
    AboutModule,
    TuiSvgModule,
    TeamModule,
    ProductionModule,
    StoreModule.forFeature(INDEX_FEATURE, reducers),
    EffectsModule.forFeature([GetPageEffect]),
    TuiLetModule,
  ],
  providers: [IndexPageService, IndexResolver],
})
export class IndexModule {}
