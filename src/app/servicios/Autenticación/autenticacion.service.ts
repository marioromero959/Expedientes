import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../datos/datos.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  API = 'http://localhost:1234/prueba/';
  datos:any;

  constructor( 
    private data: DatosService,
    private router: Router,
    private http:HttpClient,
  ) {}


  bajaUsuario(idUsuario: number) {
    return this.http.get(`${this.API}baja.php?idUsuario=${idUsuario}`);
  }

  seleccionarUsuario(id:number) {
    return this.http.get(`${this.API}seleccionar.php?id=${id}`);
  }

  editarUsuario(usuario) {
    return this.http.post(`${this.API}editar.php`, JSON.stringify(usuario));
  }

}
