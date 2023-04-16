import {ChangeDetectionStrategy, Component} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isSubmittingSelector} from '../../store/selectors'
import {ResetPasswordRequestInterface} from '../../types/reset-password-request.interface'
import {resetPasswordAction} from '../../store/actions/reset-password.action'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Поле обязательно для заполнения`,
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  isSubmitting$: Observable<boolean>

  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {
    this.isSubmitting$ = this.store.select(isSubmittingSelector)

    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.email]],
      passwordConfirmation: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }

    const {password, passwordConfirmation} = this.form.value
    const request: ResetPasswordRequestInterface = {
      code: 'some code',
      password,
      passwordConfirmation,
    }

    this.store.dispatch(resetPasswordAction({request}))
  }
}
