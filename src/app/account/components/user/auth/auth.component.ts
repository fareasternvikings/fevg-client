import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {UtilsService} from '../../../../shared/services/utils.service'
import {Pattern} from '../../../../shared/pattern/pattern'
import {debounceTime, using} from 'rxjs'
import {stepOneSelector} from '../../../../checkout/store/selectors'

interface AuthInterface {
  email: string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  @Input() data: AuthInterface

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
      email: [
        this.data.email,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(Pattern.email),
        ],
      ],
      password: [''],
      passwordConfirmation: [''],
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

  changePassword() {}
}
