import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from '../../../shared/types/current-user.interface'
import {currentUserSelector} from '../../../auth/store/selectors'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
