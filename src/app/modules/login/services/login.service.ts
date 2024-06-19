import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from '../interfaces/loginresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie: CookieService
  ) { }

  sendCredentials(username: string, password: string): Observable<LoginResponse> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post<LoginResponse>(`${this.URL}/usuarios/login`, body).pipe(
      map((res: LoginResponse) => {
        localStorage.setItem('username', res.username);
        localStorage.setItem('id', res.id.toString());
        this.cookie.set('token', res.token);
        return res;
      })
    );
  }
}
