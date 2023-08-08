import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {logoutAction} from '../auth/store/actions/logout.action'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from '../shared/types/current-user.interface'
import {currentUserSelector} from '../auth/store/selectors'
import {getCurrentUserAction} from '../auth/store/actions/get-current-user.action'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.store.dispatch(getCurrentUserAction())
  }

  logout() {
    this.store.dispatch(logoutAction())
  }
}
