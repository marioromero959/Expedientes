import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  // API = '';

  bs:BehaviorSubject<any> = new BehaviorSubject('');
  // guarda la info de cada paso
  informacion:any[] =[];

  constructor(private http:HttpClient) { }
// Junta toda la informacion los formularios en cada paso
   public mandar(cadena:any,id = null):Observable<any>{
    if(this.informacion[id] == undefined){
    this.informacion.push(cadena);
    }else if(this.informacion[id] != '' && this.informacion[id] != undefined ){
      this.informacion.splice(id,1,cadena);
    }else{
      console.log('err');
    }
    const obj = JSON.stringify(this.informacion)
    localStorage.setItem('FormData',obj)
    this.bs.next(this.informacion);
    console.log('FomsSvc:',this.informacion)
    return this.bs.asObservable();
  }
// Devuelve la informacion obtenida 
  public escucharData(): Observable<any> {
		return this.bs.asObservable();
	} 
  
  // Envia los archivos de los pasos 2 al 5 al back
  enviarFormulario(){}
// Envia archivos de P6 al backend
  enviarArchivos(){}

}
