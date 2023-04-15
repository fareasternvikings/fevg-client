import {Component, OnInit} from '@angular/core'
import {environment} from '../environments/environment'
import {select, Store} from '@ngrx/store'
import {getCurrentUserAction} from './auth/store/actions/get-current-user.action'
import {Observable} from 'rxjs'
import {CurrentUserInterface} from './shared/types/current-user.interface'
import {currentUserSelector} from './auth/store/selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface>

  title = 'fevg-client'

  constructor(private store: Store) {
    console.log('API_URL: ', environment.apiUrl)
  }

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
    this.store.dispatch(getCurrentUserAction())
  }
}
