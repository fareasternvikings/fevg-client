import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {HeroInterface} from '../../types/hero.interface'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() data: HeroInterface
}
