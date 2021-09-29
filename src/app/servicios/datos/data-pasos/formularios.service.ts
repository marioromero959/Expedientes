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

// Junta toda la informacion los formularios en cada paso
   public mandar(cadena:any,id = null):Observable<any>{
    if(this.informacion[id] == undefined){
    this.informacion.push(cadena);
    }else if(this.informacion[id] != '' && this.informacion[id] != undefined ){
      this.informacion.splice(id,1,cadena);
    }else{
      console.log('err');
    }
    this.bs.next(this.informacion);
    // console.log('Info de los formularios:', this.bs.value)
    return this.bs.asObservable();
  }
// Devuelve la informacion obtenida 
  public escucharData(): Observable<any> {
		return this.bs.asObservable();
	} 
  

}
