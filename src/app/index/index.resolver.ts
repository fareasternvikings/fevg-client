import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router'
import {Injectable} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {filter, finalize, first, Observable} from 'rxjs'
import {tap} from 'rxjs/operators'
import {isLoadingSelector} from './store/selectors'
import {getPageAction} from './store/actions/get-page.action'

@Injectable()
export class IndexResolver implements Resolve<any> {
  private isLoading = false

  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(isLoadingSelector),
      tap((isLoaded: boolean) => {
        if (!this.isLoading && !isLoaded) {
          this.isLoading = true
          this.store.dispatch(getPageAction())
        }
      }),
      filter((isLoaded: boolean) => isLoaded),
      first(),
      finalize(() => (this.isLoading = false))
    )
  }
}
