import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ColorSelectorComponent,
      multi: true,
    },
  ],
})
export class ColorSelectorComponent {
  @Input() colors: string[]

  onChange = (color) => {}
  onTouched = () => {}

  color: string

  touched = false
  disabled = false

  writeValue(color: string) {
    this.color = color
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched()
      this.touched = true
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled
  }

  changeColor(color) {
    this.color = color
    this.onChange(color)
  }
}
