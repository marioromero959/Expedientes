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
  obtenerProvincias(){
    return this.http.post("https://municipalidad.gualeguay.gob.ar/api/modulos/hcomerciales/?c=HComercial&a=DepartamentosListar",{provincia_id:12}); //Obtener id prov
  }
  //Paso 3
  id =16339;
  
  obtenerDocumentacion(id){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=DocumentacionListar`, JSON.stringify(id));//Obtener id_exp 
    //Devuelve tipo de persona, local, y solicitudes para filtrar doc
  }

//Cargar campos para editar hab
obtenerPaso1(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialObtener_HCEXPID`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso2PersonaFisica(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonaFisicaObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso2PersonaJuridica(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonaJuridicaObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso3(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCDomiciliosFyCObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso4(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCDatosDelPropietarioObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso5(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCDatosEconomicosObtener`, JSON.stringify(id));//Obtener id_exp 
}

// Una vez completado el paso 1 se genera en la BD
  enviarP1(data){
    return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialGuardar`, JSON.stringify(data));
  }
}
