import {ChangeDetectionStrategy, Component} from '@angular/core'

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductionComponent {}
