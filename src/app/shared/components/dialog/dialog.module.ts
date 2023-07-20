import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {DialogComponent} from './dialog.component'
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus'

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, PolymorpheusModule],
})
export class DialogModule {}
