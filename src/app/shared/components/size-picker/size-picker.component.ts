import {ChangeDetectionStrategy, Component, Input} from '@angular/core'
import {NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'app-size-picker',
  templateUrl: './size-picker.component.html',
  styleUrls: ['./size-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SizePickerComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizePickerComponent {
  @Input() sizes: string[]

  onChange = (size) => {}
  onTouched = () => {}

  size: string

  touched = false
  disabled = false

  writeValue(size: string) {
    this.size = size
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

  changeSize(size) {
    this.size = size
    this.onChange(size)
  }
}
