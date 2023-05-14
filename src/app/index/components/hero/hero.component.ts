import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {HeroInterface} from '../../types/hero.interface'
import {environment} from '../../../../environments/environment'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() data: HeroInterface

  setImageUrl(src) {
    return environment.uploadUrl + src
  }

  formatText(text: string) {
    const arr = text.split(' ')
    const lastWord = `<span>${arr.pop()}</span>`

    return [...arr, lastWord].join(' ')
  }
}
