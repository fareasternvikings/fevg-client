import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {AccountComponent} from './account.component'
import {PersonalComponent} from './components/personal/personal.component'
import {OrdersComponent} from './components/orders/orders.component'

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        component: PersonalComponent,
      },
      {
        path: 'my-orders',
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
