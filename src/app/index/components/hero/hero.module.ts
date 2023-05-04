import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeroComponent} from './hero.component'
import {TuiSvgModule} from '@taiga-ui/core'

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, TuiSvgModule],
  exports: [HeroComponent],
})
export class HeroModule {}
