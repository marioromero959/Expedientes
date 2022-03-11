import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod'; 
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  URL = environment.URL;

  constructor(private http: HttpClient) {}

  obtenerExpedientes(data){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialesListarXUsr`, JSON.stringify(data));
  }
  
  // Obtenemos los campos de los pasos de habilitacion
  //Paso 1
  obtenerPersonas(){
    return this.http.get(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonasTiposListar`);
  }
  obtenerSolicitudes(){
    return this.http.get(`${this.URL}/hcomerciales/?c=HComercial&a=HCSolicitudesTiposListar`);
  }
  //Paso2
  obtenerNacionalidades(){
    return this.http.get(`${this.URL}/hcomerciales/?c=HComercial&a=NacionalidadesListar`);
  }
  //Obtener id prov TODO
  obtenerProvincias(){
    return this.http.get("https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=ProvinciasListar"); 
  }
   obtenerLocalidades(provincia){
    return this.http.post("https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=LocalidadesObtener",JSON.stringify(provincia)); 
  } 
  //Paso 3
  id =16339;
  
  obtenerDocumentacion(id){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=DocumentacionListar`, JSON.stringify(id));//Obtener id_exp 
    //Devuelve tipo de persona, local, y solicitudes para filtrar doc
  }

  //Paso 5
  obtenerActividadesComerciales(){
    return this.http.get("https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=ActividadesListar"); 
  }

// Una vez completado el paso 1 se genera en la BD
  enviarP1(data){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialGuardar`, JSON.stringify(data));
  }

  
}
