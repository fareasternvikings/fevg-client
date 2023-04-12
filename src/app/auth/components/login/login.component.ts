import {ChangeDetectionStrategy, Component, Inject, Self} from '@angular/core'
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus'
import {TuiDialogContext} from '@taiga-ui/core'
import {TuiDestroyService} from '@taiga-ui/cdk'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
    @Self()
    @Inject(TuiDestroyService)
    private destroy$: TuiDestroyService
  ) {}

  onClose() {
    this.context.completeWith(false)
  }
}
