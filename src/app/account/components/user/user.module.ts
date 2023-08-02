import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {UserComponent} from './user.component'
import {PatchFormGroupValuesModule} from '../../../shared/directives/patch-form-group-values/patch-form-group-values.module'
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
} from '@taiga-ui/kit'
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'
import {ReactiveFormsModule} from '@angular/forms'
import {UtilsService} from '../../../shared/services/utils.service'
import {UserRoutingModule} from './user-routing.module'
import {PersonalComponent} from './personal/personal.component'
import {AuthComponent} from './auth/auth.component'
import {LocationComponent} from './location/location.component'

@NgModule({
  declarations: [
    UserComponent,
    PersonalComponent,
    AuthComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    PatchFormGroupValuesModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPhoneModule,
    TuiButtonModule,
    TuiCurrencyPipeModule,
    ReactiveFormsModule,
    UserRoutingModule,
    TuiInputPasswordModule,
    TuiLinkModule,
  ],
  providers: [UtilsService],
})
export class UserModule {}
