import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  API = 'http://localhost:1234/prueba/';
  datos:any;
  
  constructor( 
    private http:HttpClient,
  ) {}

// bajaUsuario(idUsuario: number) {
  // return this.http.get(`${this.API}baja.php?idUsuario=${idUsuario}`);
// }

userlogin(email, pass) {
  return this.http.post<any>(`${this.API}seleccionar.php`,{ email, pass })
  .pipe(map(Users => {
    this.setToken(Users[0]);
    return Users[0];
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
