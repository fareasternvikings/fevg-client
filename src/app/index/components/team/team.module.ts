import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TeamComponent} from './team.component'
import {SwiperModule} from 'swiper/angular'

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, SwiperModule],
  exports: [TeamComponent],
})
export class TeamModule {}
