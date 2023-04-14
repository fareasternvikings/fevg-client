import {HttpClient} from '@angular/common/http'
import {environment} from '../../../../../../environments/environment'
import {RegisterRequestInterface} from '../../types/register-request.interface'
import {AuthResponseInterface} from '../../types/auth-response.interface'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable()
export class AuthService {
  private url = `${environment.apiUrl}/auth/local`

  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<AuthResponseInterface> {
    console.log('register', data)
    return this.http.post<AuthResponseInterface>(`${this.url}/register`, data)
  }
}
