import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {IndexPageInterface} from './types/index-page.interface'
import {BackendErrorsInterface} from '../shared/types/backend-errors.interface'
import {Store} from '@ngrx/store'
import {
  backendErrorsSelector,
  isLoadingSelector,
  pageSelector,
} from './store/selectors'
import {getPageAction} from './store/actions/get-page.action'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
  isLoading$: Observable<boolean>
  page$: Observable<IndexPageInterface>
  backendErrors$: Observable<BackendErrorsInterface>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues()
    console.log('index init')
    // this.fetchData()
  }

  initValues() {
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.backendErrors$ = this.store.select(backendErrorsSelector)
    this.page$ = this.store.select(pageSelector)
  }

  fetchData() {
    this.store.dispatch(getPageAction())
  }
}
