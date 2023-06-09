import {ProductComponent} from './product.component'
import {RouterModule, Routes} from '@angular/router'
import {NgModule} from '@angular/core'

const routes: Routes = [
  {
    path: ':id',
    component: ProductComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
