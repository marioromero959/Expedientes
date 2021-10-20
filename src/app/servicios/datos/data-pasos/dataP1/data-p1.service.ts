import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataP1Service {

  URLPersonas = 'https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HCPersonasTiposListar';

  URLSolicitudes = 'https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HCSolicitudesTiposListar';


  constructor(private http:HttpClient) { }

  obtenerPersonas(){
    return this.http.get(this.URLPersonas);
  }
  obtenerSolicitudes(){
    return this.http.get(this.URLSolicitudes);
  }

  enviarPersonas(data){
    return this.http.post(this.URLPersonas, JSON.stringify(data));
  }
  enviarSolicitudes(data){
    return this.http.post(this.URLSolicitudes, JSON.stringify(data));
  }


}
