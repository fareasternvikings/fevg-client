import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeroComponent} from './hero.component'
import {TuiSvgModule} from '@taiga-ui/core'
import {TuiLetModule} from '@taiga-ui/cdk'

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, TuiSvgModule, TuiLetModule],
  exports: [HeroComponent],
})
export class HeroModule {}
