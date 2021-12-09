import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from 'src/app/shared/interface/interfaz-usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor( 
    private http:HttpClient,
  ) {}

login(email, pass){
  return this.http.post<Usuario>(`${environment.URL}/usuarios/?c=usuario&a=UsuarioAcceso`,{ email, pass })
  .pipe(
    map( Users => {
      if(Users.usuario_id){
        this.setToken(Users);
      }
      return Users;
    })
  );
}

setToken(usuario) {
  const obj = JSON.stringify(usuario); 
  localStorage.setItem('Usuario',obj);
}
deleteToken() {
  localStorage.removeItem('Usuario');
  localStorage.removeItem('FormData');
}
}
