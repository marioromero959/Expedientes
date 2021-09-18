import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  bs:BehaviorSubject<any> = new BehaviorSubject('');

  // guarda la info de cada paso
  informacion:any[] =[];

  constructor() { }

   public mandar(cadena:any):Observable<any>{
    this.informacion.push(cadena);
    this.bs.next(this.informacion);
    return this.bs.asObservable();
  }

  public escucharData(): Observable<any> {
		return this.bs.asObservable();
	} 
  
}
