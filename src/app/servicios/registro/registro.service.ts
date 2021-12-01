import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod'; 

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  URL = environment.URL;

  constructor(private http:HttpClient) { }
  
  // Creamos el usuario
  altaUsuario(data) {
    return this.http.post(`${this.URL}/usuarios/?c=usuario&a=UsuarioGuardar`, JSON.stringify(data));
  }
}
