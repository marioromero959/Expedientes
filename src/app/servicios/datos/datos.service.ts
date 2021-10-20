import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

URL = 'https://municipalidad.gualeguay.gob.ar/api/modulos/usuarios/?c=usuario&a=UsuarioGuardar'

  constructor(
    private http: HttpClient,
  ) {}

  altaUsuario(data) {
    return this.http.post(this.URL, JSON.stringify(data));
  }

}
