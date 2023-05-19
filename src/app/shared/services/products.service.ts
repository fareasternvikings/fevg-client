import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {map} from 'rxjs'

@Injectable()
export class ProductsService {
  private url = `${environment.apiUrl}/products`

  constructor(private http: HttpClient) {}

  getProductById(id: string) {
    return this.http
      .get(
        `${this.url}/${id}?populate[showcase][populate]=*&populate[thumbnail][populate]=*`
      )
      .pipe(map((response: any) => response.data))
  }
}
