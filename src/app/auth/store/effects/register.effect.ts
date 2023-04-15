import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'
import {catchError, map, of, switchMap} from 'rxjs'
import {Injectable} from '@angular/core'
import {AuthResponseInterface} from '../../types/auth-response.interface'
import {AuthService} from '../../services/auth.service'
import {PersistenceService} from '../../../shared/services/persistence.service'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map(({jwt, user}: AuthResponseInterface) => {
            this.persistenceService.set('accessToken', jwt)
            return user
          }),
          map((currentUser) => {
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse) => {
            return of(
              registerFailureAction({backendErrors: errorResponse.error.errors})
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
