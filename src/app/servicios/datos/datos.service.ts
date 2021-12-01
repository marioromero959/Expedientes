import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod'; 
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  URL = environment.URL;

  constructor(private http: HttpClient) {}

  // Obtenemos los campos de los pasos de habilitacion
  obtenerExpedientes(data){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialesListarXUsr`, JSON.stringify(data));
  }
  obtenerPersonas(){
    return this.http.get(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonasTiposListar`);
  }
  obtenerSolicitudes(){
    return this.http.get(`${this.URL}/hcomerciales/?c=HComercial&a=HCSolicitudesTiposListar`);
  }

// Una vez completado el paso 1 se genera en la BD
  enviarP1(data){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialGuardar`, JSON.stringify(data));
  }
}
