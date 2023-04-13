import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core'
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext} from '@taiga-ui/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Поле обязательно для заполнения`,
        email: `Укажите корректный email`,
      },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  onClose() {
    this.context.completeWith(false)
  }
}
