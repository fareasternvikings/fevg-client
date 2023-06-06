import {ProductsService} from '../../../shared/services/products.service'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {ProductInterface} from '../../../shared/types/product.interface'
import {Injectable} from '@angular/core'
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from '../actions/get-products.action'

@Injectable()
export class GetProductsEffect {
  getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsAction),
      switchMap(() => {
        return this.productsService.getProducts().pipe(
          map((products: ProductInterface[]) => {
            return getProductsSuccessAction({products})
          }),
          catchError((errorResponse) => {
            return of(
              getProductsFailureAction({
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
