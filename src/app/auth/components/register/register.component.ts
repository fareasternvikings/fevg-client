import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core'
import {LoginComponent} from '../login/login.component'
import {Observable, takeUntil, tap} from 'rxjs'
import {Store} from '@ngrx/store'
import {isLoggedInSelector, isSubmittingSelector} from '../../store/selectors'
import {BackendErrorsInterface} from '../../../shared/types/backend-errors.interface'
import {registerAction} from '../../store/actions/register.action'
import {RegisterRequestInterface} from '../../types/register-request.interface'
import {TuiDestroyService} from '@taiga-ui/cdk'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface>

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
    this.initValues()
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      agree: [false, [Validators.required]],
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

  login() {
    this.dialogService
      .open<any>(new PolymorpheusComponent(LoginComponent, this.injector), {
        dismissible: true,
        closeable: true,
        size: 'm',
      })
      .subscribe()
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }

    const {username, email, password}: RegisterRequestInterface =
      this.form.value

    this.store.dispatch(
      registerAction({
        request: {
          username,
          email,
          password,
        },
      })
    )
  }
}
