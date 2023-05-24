import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CheckoutComponent} from './checkout.component'
import {CheckoutRoutingModule} from './chekout-routing.module'
import {
  TuiFieldErrorPipeModule,
  TuiInputCountModule,
  TuiInputModule,
  TuiInputPhoneModule,
  TuiStepperModule,
} from '@taiga-ui/kit'
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce'
import {
  TuiButtonModule,
  TuiErrorModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core'
import {TuiLetModule} from '@taiga-ui/cdk'
import {StepOneComponent} from './components/step-one/step-one.component'
import {ReactiveFormsModule} from '@angular/forms'
import {StepperComponent} from './components/stepper/stepper.component'
import {PatchFormGroupValuesModule} from '../shared/directives/patch-form-group-values/patch-form-group-values.module'
import {StepTwoComponent} from './components/step-two/step-two.component'
import {StepThreeComponent} from './components/step-three/step-three.component'
import {UtilsService} from '../shared/services/utils.service'
import {StoreModule} from '@ngrx/store'
import {CHECKOUT_FEATURE} from './store/state'
import {reducers} from './store/reducers'
import {StepFourComponent} from './components/step-four/step-four.component'

@NgModule({
  declarations: [
    CheckoutComponent,
    StepperComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    TuiInputCountModule,
    TuiCurrencyPipeModule,
    ReactiveFormsModule,
    TuiSvgModule,
    TuiLetModule,
    TuiStepperModule,
    PatchFormGroupValuesModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    TuiInputPhoneModule,
    TuiButtonModule,
    StoreModule.forFeature(CHECKOUT_FEATURE, reducers),
  ],
  providers: [UtilsService],
})
export class CheckoutModule {}
