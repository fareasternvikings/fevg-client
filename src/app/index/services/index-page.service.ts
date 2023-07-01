import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map, Observable} from 'rxjs'
import {IndexPageResponseInterface} from '../types/index-page-response.interface'
import {IndexPageInterface} from '../types/index-page.interface'

@Injectable()
export class IndexPageService {
  private url = `${environment.apiUrl}/home-page?populate=deep`

  constructor(private http: HttpClient) {}

  getPage(): Observable<IndexPageInterface> {
    return this.http.get<IndexPageResponseInterface>(this.url).pipe(
      map(({data}: IndexPageResponseInterface) => {
        const {hero, productsList, production, promo, aboutUs, team} =
          data.attributes

        const products = productsList.products.data

        return {hero, products, production, promo, aboutUs, team}
      })
    )
  }
}
