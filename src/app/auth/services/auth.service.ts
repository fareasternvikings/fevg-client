import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import {RegisterRequestInterface} from '../types/register-request.interface'
import {AuthResponseInterface} from '../types/auth-response.interface'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {LoginRequestInterface} from '../types/login-request.interface'
import {CurrentUserInterface} from '../../shared/types/current-user.interface'
import {ForgotPasswordRequestInterface} from '../types/forgot-password-request.interface'
import {ForgotPasswordResponseInterface} from '../types/forgot-password-response.interface'

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

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get<CurrentUserInterface>(`${environment.apiUrl}/users/me`)
  }

  forgotPassword(
    data: ForgotPasswordRequestInterface
  ): Observable<ForgotPasswordResponseInterface> {
    return this.http.post<ForgotPasswordResponseInterface>(
      `${environment.apiUrl}/auth/forgot-password`,
      data
    )
  }
}
