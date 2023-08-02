import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AccountComponent} from './account.component'
import {OrdersComponent} from './components/orders/orders.component'
import {UserComponent} from './components/user/user.component'

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
