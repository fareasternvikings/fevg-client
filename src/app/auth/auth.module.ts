import {ModuleWithProviders, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AuthService} from './services/auth.service'
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
import {AUTH_FEATURE} from './store/state'
import {RegisterEffect} from './store/effects/register.effect'
import {EffectsModule} from '@ngrx/effects'
import {reducers} from './store/reducers'
import {LoginEffect} from './store/effects/login.effect'
import {GetCurrentUserEffect} from './store/effects/get-current-user.effect'
import {AuthGuard} from './services/auth.guard'
import {LogoutEffect} from './store/effects/logout.effect'
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component'
import {ResetPasswordComponent} from './components/reset-password/reset-password.component'
import {AuthRoutingModule} from './auth-routing.module'
import {ForgotPasswordEffect} from './store/effects/forgot-password.effect'
import {ResetPasswordEffect} from './store/effects/reset-password.effect'

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
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
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      LogoutEffect,
      ForgotPasswordEffect,
      ResetPasswordEffect,
    ]),
    TuiCheckboxLabeledModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard,
        PersistenceService,
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: AuthInterceptor,
        //   multi: true,
        // },
      ],
    }
  }
}
