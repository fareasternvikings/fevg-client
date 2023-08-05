import {NgModule} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {TeamComponent} from './team.component'
import {SwiperModule} from 'swiper/angular'

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, SwiperModule, NgOptimizedImage],
  exports: [TeamComponent],
})
export class TeamModule {}
