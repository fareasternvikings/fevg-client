import {NgModule} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {HeroComponent} from './hero.component'
import {TuiSvgModule} from '@taiga-ui/core'
import {TuiLetModule} from '@taiga-ui/cdk'

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, TuiSvgModule, TuiLetModule, NgOptimizedImage],
  exports: [HeroComponent],
})
export class HeroModule {}
