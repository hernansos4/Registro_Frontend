import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  getCarreras() {
    return this.http.get(`${this.URL}/clases/allCarreras`)
      .pipe(map((res: any) => {
        return res
      }))
  }



  setUser(username: string, password: string, id_carrera: number) {
    const body = {
      username: username,
      password: password,
      id_carrera: id_carrera
    }
    return this.http.post(`${this.URL}/usuarios/register`, body)
      .pipe(map((res: any) => {
        return res
      }))

  }
}
