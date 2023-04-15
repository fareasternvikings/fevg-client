import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
} from '@angular/core'
import {TuiDialogService} from '@taiga-ui/core'
import {LoginComponent} from '../../../auth/components/login/login.component'
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus'
import {RegisterComponent} from '../../../auth/components/register/register.component'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  login() {
    this.dialogService
      .open<any>(new PolymorpheusComponent(LoginComponent, this.injector), {
        dismissible: true,
        closeable: true,
        size: 'm',
      })
      .subscribe()
  }

  register() {
    this.dialogService
      .open<any>(new PolymorpheusComponent(RegisterComponent, this.injector), {
        dismissible: true,
        closeable: true,
        size: 'm',
      })
      .subscribe()
  }
}