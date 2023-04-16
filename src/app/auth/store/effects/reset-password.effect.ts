import {Injectable} from '@angular/core'
import {AuthService} from '../../services/auth.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  resetPasswordAction,
  resetPasswordFailureAction,
  resetPasswordSuccessAction,
} from '../actions/reset-password.action'
import {catchError, map, of, switchMap} from 'rxjs'
import {ResetPasswordResponseInterface} from '../../types/reset-password-response.interface'

@Injectable()
export class ResetPasswordEffect {
  resetPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resetPasswordAction),
      switchMap(({request}) => {
        return this.authService.resetPassword(request).pipe(
          map((response: ResetPasswordResponseInterface) => {
            return resetPasswordSuccessAction({response})
          }),
          catchError((errorResponse) => {
            return of(
              resetPasswordFailureAction({
                backendErrors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  })

  constructor(private actions$: Actions, private authService: AuthService) {}
}
