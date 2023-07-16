import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorComponent {
  @Input() colors: any[]
  @Output() changeColor: EventEmitter<string> = new EventEmitter<string>()

  pickColor(color) {
    this.changeColor.emit(color)
  }
}
