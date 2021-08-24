import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

API = 'http://localhost/pruebas/';

  constructor(
    private http: HttpClient,
  ) { }

  agregarUsuario(data):Observable<any>{
    return this.http.post(this.API+"?insertar=1",data);
  }



}
