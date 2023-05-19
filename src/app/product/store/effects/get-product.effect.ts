import {ProductsService} from '../../../shared/services/products.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from '../actions/get-product.action'
import {catchError, map, of, switchMap} from 'rxjs'
import {ProductInterface} from '../../../shared/types/product.interface'
import {Injectable} from '@angular/core'

@Injectable()
export class GetProductEffect {
  getProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductAction),
      switchMap(({id}) => {
        return this.productsService.getProductById(id).pipe(
          map((product: ProductInterface) => {
            return getProductSuccessAction({product})
          }),
          catchError((errorResponse) => {
            return of(
              getProductFailureAction({
                backendErrors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
