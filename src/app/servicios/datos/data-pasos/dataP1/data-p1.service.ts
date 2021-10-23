import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataP1Service {

  URLPersonas = 'https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HCPersonasTiposListar';

  URLSolicitudes = 'https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HCSolicitudesTiposListar';

  URLP1='https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=HComercialGuardar'

constructor(private http:HttpClient) { }

  obtenerPersonas(){
    return this.http.get(this.URLPersonas);
  }
  obtenerSolicitudes(){
    return this.http.get(this.URLSolicitudes);
  }
  enviarP1(data){
    return this.http.post(this.URLP1, JSON.stringify(data));
  }


}
