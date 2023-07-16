import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SizePickerComponent} from './size-picker.component'

@NgModule({
  declarations: [SizePickerComponent],
  imports: [CommonModule],
  exports: [SizePickerComponent],
})
export class SizePickerModule {}
