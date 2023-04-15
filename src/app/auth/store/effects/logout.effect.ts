import {PersistenceService} from '../../../shared/services/persistence.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {logoutAction} from '../actions/logout.action'
import {tap} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persistanceService.set('accessToken', '')
          this.router.navigateByUrl('/')
        })
      )
    },
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistenceService
  ) {}
}
