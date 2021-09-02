import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { map } from 'rxjs/operators';
import { DatosService } from '../datos/datos.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

API = 'http://localhost/pruebas/';

  constructor( 
    private data: DatosService,
    private router: Router,
    private http:HttpClient,
  ) {}


  userLogin(email:string, password:string){
    return this.http.post<any>(this.API + 'login.php', { email, password })
.pipe(map(Users => {
this.setToken(Users[0].usuario);
return Users[0];
}));
  }

    setToken(token: string) {
    localStorage.setItem('token', token);
    console.log(token);
    }
    getToken() {
    return localStorage.getItem('token');
    }
    deleteToken() {
    localStorage.removeItem('token');
    }
    isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
    }

}
