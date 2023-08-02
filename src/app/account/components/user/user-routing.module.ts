import {UserComponent} from './user.component'
import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
