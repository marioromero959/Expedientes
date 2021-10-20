import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  URL = 'https://municipalidad.gualeguay.gob.ar/api/modulos/usuarios/?c=usuario&a=UsuarioAcceso';

  constructor( 
    private http:HttpClient,
  ) {}

login(email, pass){
  return this.http.post<any>(this.URL,{ email, pass })
  .pipe(map(Users => {
    this.setToken(Users);
    return Users;
  }));
}

setToken(usuario) {
  const obj = JSON.stringify(usuario); 
  localStorage.setItem('Usuario',obj);
}
deleteToken() {
  localStorage.removeItem('Usuario');
}
}
