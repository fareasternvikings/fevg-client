import {ChangeDetectionStrategy, Component, Inject, Self} from '@angular/core'
import {TuiDestroyService, TuiDialog} from '@taiga-ui/cdk'
import {TuiDialogCloseService} from '@taiga-ui/core'
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus'
import {Observable, takeUntil} from 'rxjs'
import {DialogOptions} from './dialog-options.interface'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [TuiDestroyService, TuiDialogCloseService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: TuiDialog<DialogOptions, boolean>,
    @Inject(TuiDialogCloseService) close$: Observable<unknown>,
    @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>
  ) {
    close$
      .pipe(takeUntil(destroy$))
      .subscribe(() => this.context.$implicit.complete())
  }

  onClick(response: boolean): void {
    this.context.completeWith(response)
  }
}
