import {ChangeDetectionStrategy, Component} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {UtilsService} from '../../../../shared/services/utils.service'
import {Pattern} from '../../../../shared/pattern/pattern'
import {phoneLengthValidator} from '../../../../shared/validators/phone-length.validator'
import {debounceTime, using} from 'rxjs'
import {stepOneSelector} from '../../../../checkout/store/selectors'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent {
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
    age: ['', [Validators.required, Validators.pattern(Pattern.email)]],
    phone: ['', [Validators.required, phoneLengthValidator]],
  })

  formValues$ = using(
    () =>
      this.form.valueChanges
        .pipe(
          debounceTime(300)
          // distinctUntilChanged((a: StepOneInterface, b: StepOneInterface) => {
          //   return this.utils.isObjectsEqual(a, b)
          // }),
          // tap((stepOne: StepOneInterface) => {
          //   this.store.dispatch(changeStepOneAction({stepOne}))
          // })
        )
        .subscribe(),
    () => this.store.select(stepOneSelector)
  )
}
