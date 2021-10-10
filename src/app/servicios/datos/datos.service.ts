import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

API = 'http://localhost:1234/prueba/';

  constructor(
    private http: HttpClient,
  ) {}

  altaUsuario(data) {
    return this.http.post(`${this.API}alta.php`, JSON.stringify(data));
  }

  obtenerUsuarios() {
    return this.http.get(`${this.API}obtener.php`);
  }
  
  /*   obtenerUsuario(id):Observable<any>{
      return this.http.get(this.API+"?consultar="+id);
    } */
  
}
