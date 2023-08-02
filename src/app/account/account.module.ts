import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AccountComponent} from './account.component'
import {AccountRoutingModule} from './account-routing.module'
import {OrdersModule} from './components/orders/orders.module'
import {TuiSvgModule} from '@taiga-ui/core'
import {UserModule} from './components/user/user.module'

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    UserModule,
    OrdersModule,
    TuiSvgModule,
  ],
})
export class AccountModule {}
