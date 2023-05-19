import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {CartComponent} from './cart.component'

const routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
