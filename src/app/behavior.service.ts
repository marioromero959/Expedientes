import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  bs:BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  public mandar(cadena:any):Observable<any>{
    this.bs.next(cadena);
    return this.bs.asObservable();
  }

  public escucha(): Observable<string> {
		return this.bs.asObservable();
	}
}
