import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  editarUsuario(data){
    return this.http.post(`${this.API}editar.php`, JSON.stringify(data));
  }




}
