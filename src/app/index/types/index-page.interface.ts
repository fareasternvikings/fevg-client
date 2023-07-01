import {HeroInterface} from './hero.interface'
import {ProductInterface} from '../../shared/types/product.interface'
import {AboutUsInterface} from './about-us.interface'
import {PromoInterface} from './promo.interface'
import {TeamInterface} from './team.interface'
import {ProductionInterface} from './production.interface'

export interface IndexPageInterface {
  hero: HeroInterface
  products: ProductInterface[]
  production: ProductionInterface[]
  aboutUs: AboutUsInterface
  promo: PromoInterface
  team: TeamInterface
}
