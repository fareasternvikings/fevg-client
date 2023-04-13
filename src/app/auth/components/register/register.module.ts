import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RegisterComponent} from './register.component'
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiInputPasswordModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiCheckboxLabeledModule,
    TuiButtonModule,
    TuiLinkModule,
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
