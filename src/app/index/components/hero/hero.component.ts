import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {HeroInterface} from '../../types/hero.interface'
import {environment} from '../../../../environments/environment'
import {filter, map, Observable, of} from 'rxjs'
import {ImagesInterface} from '../../../shared/types/images.interface'
import {ImageInterface} from '../../../shared/types/image.interface'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  @Input() data: HeroInterface

  photos$: Observable<ImageInterface[]>

  ngOnInit(): void {
    this.photos$ = of(this.data.photos).pipe(
      filter(Boolean),
      map((images: ImagesInterface) => {
        return images.data
      })
    )
  }

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  formatText(text: string) {
    const arr = text.split(' ')
    const lastWord = `<span>${arr.pop()}</span>`

    return [...arr, lastWord].join(' ')
  }
}
