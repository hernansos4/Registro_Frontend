import { InfoUser } from './../interfaces/infoUser.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, retry, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroClasesService {
  private readonly URL = environment.api
  constructor(private http: HttpClient, private cookie$: CookieService) { }



  getClases() {

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

  setClase(nombre: string, unidades_valorativas: number, parent: number, id_carrera: number) {
    const body = {
      nombre: nombre,
      unidades_valorativas: unidades_valorativas,
      id_carrera: id_carrera,
      parent: parent
    }

    const token = this.cookie$.get('token');

    return this.http.post(`${this.URL}/clases/register`, body,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .pipe(map((res: any) => {
        return res
      }))
  }

  getInfoUsuario(id: string): Observable<InfoUser> {
    const token = this.cookie$.get('token');
    return this.http.get<InfoUser>
      (`${this.URL}/usuarios/infoUser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      )
      .pipe(map((res: InfoUser) => {
        return res
      }))
  }

}
