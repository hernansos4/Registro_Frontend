import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Carrera } from '../interfaces/carrera.interface';

@Injectable({
  providedIn: 'root'
})


export class HomeServicesService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie$: CookieService) { }

  showCarrera(): Observable<Carrera> {
    const token = this.cookie$.get('token');

    return this.http.get<Carrera>(`${this.URL}/clases/findCarreraUser`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .pipe((res) => {
        return res
      })
  }



}
