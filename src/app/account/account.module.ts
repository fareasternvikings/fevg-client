import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AccountComponent} from './account.component'
import {AccountRoutingModule} from './account-routing.module'
import {PersonalModule} from './components/personal/personal.module'
import {OrdersModule} from './components/orders/orders.module'
import {TuiSvgModule} from '@taiga-ui/core'

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PersonalModule,
    OrdersModule,
    TuiSvgModule,
  ],
})
export class AccountModule {}
