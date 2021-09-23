import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormulariosService {
  bs:BehaviorSubject<any> = new BehaviorSubject('');
  bd:BehaviorSubject<any> = new BehaviorSubject('');

  // guarda la info de cada paso
  informacion:any[] =[];

  constructor() { }

// Junta toda la informacion los formularios en cada paso
   public mandar(cadena:any):Observable<any>{
    this.informacion.push(cadena);
    this.bs.next(this.informacion);
    return this.bs.asObservable();
  }
// Muestra la informacion en comerciales.ts
  public escucharData(): Observable<any> {
		return this.bs.asObservable();
	} 
  
// Comunica cada paso para cambiar las interfaces
  public enviar(cadena:any,op = null):Observable<any>{
    const info = [];
    info.push(cadena,op);
      this.bd.next(info);
      return this.bd.asObservable();
  }

  public obtener(): Observable<any> {
		return this.bd.asObservable();
	} 
  

}
