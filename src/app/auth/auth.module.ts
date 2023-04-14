import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AuthService} from './components/register/store/services/auth.service'
import {PersistenceService} from '../shared/services/persistence.service'
import {RegisterComponent} from './components/register/register.component'
import {HttpClientModule} from '@angular/common/http'
import {
  TuiCheckboxLabeledModule,
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
import {LoginComponent} from './components/login/login.component'
import {StoreModule} from '@ngrx/store'
import {AUTH_FEATURE} from './components/register/store/state'
import {RegisterEffect} from './components/register/store/effects/register.effect'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './components/register/store/reducers'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
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
    StoreModule.forFeature(AUTH_FEATURE, reducers),
    EffectsModule.forFeature([RegisterEffect]),
    TuiCheckboxLabeledModule,
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
