import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

API = 'http://localhost:1234/prueba/conexion.php';

  constructor(
    private http: HttpClient,
  ) {}

  agregarUsuario(data):Observable<any>{
    return this.http.post(this.API+"?insertar=1",data);
  }

  obtenerUsuarios(){
    return this.http.get(this.API);
  }

  borrarUsuario(id):Observable<any>{
    return this.http.get(this.API+"?borrar="+id);
  }

  obtenerUsuario(id):Observable<any>{
    return this.http.get(this.API+"?consultar="+id);
  }


}
