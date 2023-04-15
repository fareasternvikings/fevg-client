import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {RegisterRequestInterface} from '../types/register-request.interface'
import {AuthResponseInterface} from '../types/auth-response.interface'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {LoginRequestInterface} from '../types/login-request.interface'

@Injectable()
export class AuthService {
  private url = `${environment.apiUrl}/auth/local`

  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(`${this.url}/register`, data)
  }

  login(data: LoginRequestInterface): Observable<AuthResponseInterface> {
    return this.http.post<AuthResponseInterface>(this.url, data)
  }
}
