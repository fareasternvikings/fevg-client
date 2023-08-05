import {Actions, createEffect, ofType} from '@ngrx/effects'
import {IndexPageService} from '../../services/index-page.service'
import {
  getPageAction,
  getPageFailureAction,
  getPageSuccessAction,
} from '../actions/get-page.action'
import {catchError, map, of, switchMap} from 'rxjs'
import {IndexPageInterface} from '../../types/index-page.interface'
import {Injectable} from '@angular/core'

@Injectable()
export class GetPageEffect {
  getPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPageAction),
      switchMap(() => {
        return this.service.getPage().pipe(
          map((page: IndexPageInterface) => {
            return getPageSuccessAction({page})
          }),
          catchError((errorResponse) => {
            console.log('errorResponse', errorResponse)
            return of(getPageFailureAction({backendErrors: errorResponse}))
          })
        )
      })
    )
  })

  constructor(private actions$: Actions, private service: IndexPageService) {}
}
