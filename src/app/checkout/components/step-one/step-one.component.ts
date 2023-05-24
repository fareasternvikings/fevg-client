import {ChangeDetectionStrategy, Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {Pattern} from '../../../shared/pattern/pattern'
import {phoneLengthValidator} from '../../../shared/validators/phone-length.validator'
import {debounceTime, distinctUntilChanged, tap, using} from 'rxjs'
import {StepOneInterface} from '../../types/step-one.interface'
import {UtilsService} from '../../../shared/services/utils.service'
import {stepOneSelector} from '../../store/selectors'
import {changeStepOneAction} from '../../store/actions/index.action'

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepOneComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private utils: UtilsService
  ) {}

  form = this.fb.group({
    lastName: [
      '',
      [
        Validators.required,
        Validators.pattern(Pattern.Text),
        Validators.minLength(2),
      ],
    ],
    firstName: [
      '',
      [
        Validators.required,
        Validators.pattern(Pattern.Text),
        Validators.minLength(2),
      ],
    ],
    middleName: [
      '',
      [
        Validators.required,
        Validators.pattern(Pattern.Text),
        Validators.minLength(2),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(Pattern.email),
      ],
    ],
    phone: ['', [Validators.required, phoneLengthValidator]],
  })

  formValues$ = using(
    () =>
      this.form.valueChanges
        .pipe(
          debounceTime(300),
          distinctUntilChanged((a: StepOneInterface, b: StepOneInterface) => {
            return this.utils.isObjectsEqual(a, b)
          }),
          tap((stepOne: StepOneInterface) => {
            this.store.dispatch(changeStepOneAction({stepOne}))
          })
          // tap(() => {
          //   this.store.dispatch(
          //     changeValidityAction({isValid: this.form.valid})
          //   )
          // })
        )
        .subscribe(),
    () => this.store.select(stepOneSelector)
  )
}
