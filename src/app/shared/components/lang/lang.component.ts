import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core'

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit {
  @Output() changeLang: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.onChange('rus')
  }

  onChange(lang) {
    this.changeLang.emit(lang)
  }
}
