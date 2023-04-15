import {catchError, map, of, switchMap} from 'rxjs'
import {
  forgotPasswordAction,
  forgotPasswordFailureAction,
  forgotPasswordSuccessAction,
} from '../actions/forgot-password.action'
import {ForgotPasswordResponseInterface} from '../../types/forgot-password-response.interface'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {AuthService} from '../../services/auth.service'
import {ForgotPasswordRequestInterface} from '../../types/forgot-password-request.interface'

export class ForgotPasswordEffect {
  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(forgotPasswordAction),
      switchMap((request: ForgotPasswordRequestInterface) => {
        return this.authService.forgotPassword(request).pipe(
          map((response: ForgotPasswordResponseInterface) => {
            return forgotPasswordSuccessAction({response})
          }),
          catchError((errorResponse) => {
            return of(
              forgotPasswordFailureAction({
                backendErrors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private authService: AuthService) {}
}
