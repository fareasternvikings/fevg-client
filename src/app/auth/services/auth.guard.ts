import {Inject, Injectable, Injector} from '@angular/core'
import {Observable, take, tap} from 'rxjs'
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import {Store} from '@ngrx/store'
import {LoginComponent} from '../components/login/login.component'
import {TuiDialogService} from '@taiga-ui/core'
import {isLoggedInSelector} from '../store/selectors'

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  isLoggedIn$: Observable<boolean>

  constructor(
    private store: Store,
    private router: Router,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector)

    return this.isLoggedIn$.pipe(
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.dialogService
            .open<any>(
              new PolymorpheusComponent(LoginComponent, this.injector),
              {
                dismissible: true,
                closeable: false,
                size: 'auto',
              }
            )
            .pipe(take(1))
            .subscribe()
        }
      })
    )
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}
