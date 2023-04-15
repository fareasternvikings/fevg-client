import {Component, OnInit} from '@angular/core'
import {environment} from '../environments/environment'
import {Store} from '@ngrx/store'
import {getCurrentUserAction} from './auth/store/actions/get-current-user.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fevg-client'

  constructor(private store: Store) {
    console.log('API_URL: ', environment.apiUrl)
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
