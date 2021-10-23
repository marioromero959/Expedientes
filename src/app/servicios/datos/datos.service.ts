import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

URL = 'https://municipalidad.gualeguay.gob.ar/api/modulos/usuarios/?c=usuario&a=UsuarioGuardar'
URL2 = 'https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HComercialesListarXUsr'

  constructor(
    private http: HttpClient,
  ) {}

  altaUsuario(data) {
    return this.http.post(this.URL, JSON.stringify(data));
  }

  obtenerExpedientes(data){
    return this.http.post(this.URL2, JSON.stringify(data));
  }

}
