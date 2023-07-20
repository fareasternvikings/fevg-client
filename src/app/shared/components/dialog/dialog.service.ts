import {Injectable, Provider} from '@angular/core'
import {DialogComponent} from './dialog.component'
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk'
import {DialogOptions} from './dialog-options.interface'
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus'

@Injectable({
  providedIn: 'root',
})
export class DialogService extends AbstractTuiDialogService<
  DialogOptions,
  boolean
> {
  readonly defaultOptions = {
    heading: `Are you sure?`,
    buttons: [`Yes`, `No`],
  } as const

  readonly component = new PolymorpheusComponent(DialogComponent)
}

export const DIALOG_PROVIDER: Provider = {
  provide: TUI_DIALOGS,
  useExisting: DialogService,
  multi: true,
}
