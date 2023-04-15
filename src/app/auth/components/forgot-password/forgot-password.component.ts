import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext} from '@taiga-ui/core'
import {TuiDestroyService} from '@taiga-ui/cdk'
import {Store} from '@ngrx/store'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'
import {Observable, takeUntil, tap} from 'rxjs'
import {isLoggedInSelector, isSubmittingSelector} from '../../store/selectors'
import {ForgotPasswordRequestInterface} from '../../types/forgot-password-request.interface'
import {forgotPasswordAction} from '../../store/actions/forgot-password.action'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Поле обязательно для заполнения`,
        email: `Укажите корректный email`,
      },
    },
    TuiDestroyService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent implements OnInit {
  isSubmitting$: Observable<boolean>

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
    private destroy$: TuiDestroyService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  initValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector)

    this.store
      .select(isLoggedInSelector)
      .pipe(
        tap((isLoggedIn: boolean) => {
          if (isLoggedIn) {
            // this.context.completeWith(true)
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe()
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return
    }

    const {email}: ForgotPasswordRequestInterface = this.form.value

    this.store.dispatch(forgotPasswordAction({email}))
  }
}
