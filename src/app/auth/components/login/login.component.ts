import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core'
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'
import {Observable, takeUntil, tap} from 'rxjs'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'
import {isLoggedInSelector, isSubmittingSelector} from '../../store/selectors'
import {Store} from '@ngrx/store'
import {TuiDestroyService} from '@taiga-ui/cdk'
import {LoginRequestInterface} from '../../types/login-request.interface'
import {loginAction} from '../../store/actions/login.action'
import {ForgotPasswordComponent} from '../forgot-password/forgot-password.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Поле обязательно для заполнения`,
        identifier: `Укажите корректный email`,
      },
    },
    TuiDestroyService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  backendErrors: Observable<BackendErrorsInterface>

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private destroy$: TuiDestroyService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  initValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector)

    this.store
      .select(isLoggedInSelector)
      .pipe(
        tap((isLoggedIn: boolean) => {
          if (isLoggedIn) {
            // this.context.comp
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe()
  }

  onClose() {
    this.context.completeWith(false)
  }

  forgotPassword() {
    this.dialogService
      .open<any>(
        new PolymorpheusComponent(ForgotPasswordComponent, this.injector),
        {
          dismissible: true,
          closeable: true,
          size: 'm',
        }
      )
      .subscribe()
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }

    const {identifier, password}: LoginRequestInterface = this.form.value

    this.store.dispatch(
      loginAction({
        request: {
          identifier,
          password,
        },
      })
    )
  }
}
