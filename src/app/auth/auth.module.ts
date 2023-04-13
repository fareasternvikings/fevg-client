import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoginModule} from './components/login/login.module'
import {RegisterModule} from './components/register/register.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, RegisterModule],
})
export class AuthModule {}
