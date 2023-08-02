import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {TeamMemberInterface} from '../../types/team.interface'
import {environment} from '../../../../environments/environment'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isLargeScreenSelector} from '../../../store/global/selectors'
import SwiperCore, {Pagination, SwiperOptions} from 'swiper'

SwiperCore.use([Pagination])

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent implements OnInit {
  @Input() members: TeamMemberInterface[]
  isLargeScreen$: Observable<boolean>

  config: SwiperOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      920: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {clickable: true},
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log('this.members', this.members)
    this.isLargeScreen$ = this.store.select(isLargeScreenSelector)
  }

  setImageUrl(url) {
    return environment.uploadUrl + url
  }
}
