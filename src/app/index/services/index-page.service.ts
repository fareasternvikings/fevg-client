import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map, Observable} from 'rxjs'
import {IndexPageResponseInterface} from '../types/index-page-response.interface'
import {IndexPageInterface} from '../types/index-page.interface'

@Injectable()
export class IndexPageService {
  private url = `${environment.apiUrl}/home-page`

  constructor(private http: HttpClient) {}

  getPage(): Observable<IndexPageInterface> {
    const params = new HttpParams({
      fromObject: {
        'populate[productsList][populate]': '*',
        'populate[hero][populate]': '*',
        'populate[production][populate]': '*',
        'populate[aboutUs][populate]': '*',
        'populate[promo][populate]': '*',
        'populate[team][populate]': '*',
      },
    })

    return this.http.get<IndexPageResponseInterface>(this.url, {params}).pipe(
      map(({data}: IndexPageResponseInterface) => {
        const {hero, productsList, production, promo, aboutUs, team} =
          data.attributes

        const products = productsList.products.data

        return {hero, products, production, promo, aboutUs, team}
      })
    )
  }
}
