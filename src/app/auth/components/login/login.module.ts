import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoginComponent} from './login.component'
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit'
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLabelModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TuiInputModule,
    TuiLinkModule,
    TuiLabelModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPasswordModule,
    TuiButtonModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
