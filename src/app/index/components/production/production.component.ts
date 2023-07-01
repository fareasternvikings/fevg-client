import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {ProductionInterface} from '../../types/production.interface'

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductionComponent implements OnInit {
  @Input() data: ProductionInterface[]

  currentContentId: number

  ngOnInit(): void {
    this.currentContentId = this.data[0].id
  }

  setContent(id: number) {
    this.currentContentId = id
  }
}
