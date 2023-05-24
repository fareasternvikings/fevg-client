import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CheckoutComponent} from './checkout.component'
import {StepOneComponent} from './components/step-one/step-one.component'
import {StepTwoComponent} from './components/step-two/step-two.component'
import {StepThreeComponent} from './components/step-three/step-three.component'
import {StepFourComponent} from './components/step-four/step-four.component'

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        redirectTo: '1',
        pathMatch: 'full',
      },
      {
        path: '1',
        component: StepOneComponent,
      },
      {
        path: '2',
        component: StepTwoComponent,
      },
      {
        path: '3',
        component: StepThreeComponent,
      },
      {
        path: '4',
        component: StepFourComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}
