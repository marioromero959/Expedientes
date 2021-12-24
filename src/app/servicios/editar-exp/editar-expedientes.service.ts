import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod'; 
import { Paso1, Paso2Fisica, Paso3 } from 'src/app/shared/interface/interfaz-habilitaciones';

@Injectable({
  providedIn: 'root'
})
export class EditarExpedientesService {

  URL = environment.URL;

  constructor(private http:HttpClient) { }

  //Cargar campos para editar hab
obtenerPaso1(id){
  return this.http.post<Paso1>(`${this.URL}/hcomerciales/?c=HComercial&a=HComercialObtener_HCEXPID`, JSON.stringify(id)); 
}

obtenerPaso2PersonaFisica(id){
  return this.http.post<Paso2Fisica>(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonaFisicaObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso2PersonaJuridica(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCPersonaJuridicaObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso3(id){
  return this.http.post<Paso3>(`${this.URL}/hcomerciales/?c=HComercial&a=HCDomiciliosFyCObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso4(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCDatosDelPropietarioObtener`, JSON.stringify(id));//Obtener id_exp 
}
obtenerPaso5(id){
  return this.http.post(`${this.URL}/hcomerciales/?c=HComercial&a=HCDatosEconomicosObtener`, JSON.stringify(id));//Obtener id_exp 
}
}
