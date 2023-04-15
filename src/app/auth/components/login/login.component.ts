import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext} from '@taiga-ui/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'
import {Observable, takeUntil, tap} from 'rxjs'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'
import {isLoggedInSelector, isSubmittingSelector} from '../../store/selectors'
import {Store} from '@ngrx/store'
import {TuiDestroyService} from '@taiga-ui/cdk'
import {LoginRequestInterface} from '../../types/login-request.interface'
import {loginAction} from '../../store/actions/login.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Поле обязательно для заполнения`,
        identifier: `Укажите корректный identifier`,
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
