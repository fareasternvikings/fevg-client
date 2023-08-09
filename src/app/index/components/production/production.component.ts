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
    this.currentContentId =
      this.data && this.data.length ? this.data[0].id : null
  }

  setContent(id: number): void {
    this.currentContentId = id
  }
}
