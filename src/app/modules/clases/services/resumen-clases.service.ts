import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ResumenClasesService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie$: CookieService) { }

  updateClase(id_clase: number, id_user: number, estado: string) {
    const token = this.cookie$.get('token');

    const body = {
      id_clase: id_clase,
      id_user: id_user,
      estado: estado
    }

    return this.http.post(`${this.URL}/clases/setEstado`, body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .pipe(map((res: any) => {
        return res
      }))
  }

  showOrganigrama() {
    const token = this.cookie$.get('token');

    return this.http.get(`${this.URL}/clases/findOrganigrama`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
      .pipe(map((res: any) => {
        return res
      }))
  }

  showClases() {
    const token = this.cookie$.get('token');

    return this.http.get(`${this.URL}/clases/allClases`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
      .pipe(map((res: any) => {
        return res
      }))
  }
}
