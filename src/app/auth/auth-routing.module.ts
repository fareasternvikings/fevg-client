import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ResetPasswordComponent} from './components/reset-password/reset-password.component'

const routes: Routes = [
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
