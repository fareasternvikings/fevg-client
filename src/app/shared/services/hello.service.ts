import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {tap} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable()
export class HelloService {
  constructor(private http: HttpClient) {}

  sayHello() {
    return this.http
      .get(`${environment.apiUrl}/products`)
      .pipe(
        tap((response) => {
          console.log('response: ', response)
        })
      )
      .subscribe()
  }
}
