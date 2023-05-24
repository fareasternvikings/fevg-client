import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  currentStep$: Observable<number>
  isCurrentStepValid$: Observable<boolean>
  finishedSteps$: Observable<{[key: number]: boolean}>

  steps = ['Личные данные', 'Доставка', 'Оплата', 'Подтвержение заказа']

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  initializeValues() {
    // this.currentStep$ = this.store.select(currentStepSelector)
    // this.isCurrentStepValid$ = this.store.select(isCurrentStepValidSelector)
    // this.finishedSteps$ = this.store.select(finishedStepsSelector)
  }
}
