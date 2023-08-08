import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {UtilsService} from '../../../../shared/services/utils.service'
import {Pattern} from '../../../../shared/pattern/pattern'
import {phoneLengthValidator} from '../../../../shared/validators/phone-length.validator'
import {debounceTime, using} from 'rxjs'
import {stepOneSelector} from '../../../../checkout/store/selectors'
import {CurrentUserPersonalInterface} from '../../../../shared/types/current-user.interface'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalComponent implements OnInit {
  @Input() data: CurrentUserPersonalInterface

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      lastName: [
        this.data.lastName,
        [
          Validators.required,
          Validators.pattern(Pattern.Text),
          Validators.minLength(2),
        ],
      ],
      firstName: [
        this.data.firstName,
        [
          Validators.required,
          Validators.pattern(Pattern.Text),
          Validators.minLength(2),
        ],
      ],
      middleName: [
        this.data.middleName,
        [
          Validators.required,
          Validators.pattern(Pattern.Text),
          Validators.minLength(2),
        ],
      ],
      age: [
        this.data.age,
        [Validators.required, Validators.pattern(Pattern.email)],
      ],
      phone: [this.data.phone, [Validators.required, phoneLengthValidator]],
    })
  }

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
