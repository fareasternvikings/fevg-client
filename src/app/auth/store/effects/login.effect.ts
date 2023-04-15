import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AuthService} from '../../services/auth.service'
import {PersistenceService} from '../../../shared/services/persistence.service'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'
import {catchError, map, of, switchMap} from 'rxjs'
import {AuthResponseInterface} from '../../types/auth-response.interface'
import {Injectable} from '@angular/core'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map(({jwt, user}: AuthResponseInterface) => {
            this.persistenceService.set('accessToken', jwt)
            return user
          }),
          map((currentUser) => {
            return loginSuccessAction({currentUser})
          }),
          catchError((errorResponse) => {
            return of(
              loginFailureAction({backendErrors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
