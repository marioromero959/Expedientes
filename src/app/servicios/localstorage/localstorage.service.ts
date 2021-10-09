import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  arr1 = [
    {id: 1,
    name: 'mario'},
    {id: 2,
    name: 'juan'},
    {id: 3,
    name: 'jose'},
  ]

  constructor() { }

  agregar(arr){
    console.log('desde lser',arr)
    let obj = JSON.stringify(arr)
    localStorage['variable'] = obj;
  }
   editar(arr){
    let obj = JSON.stringify(arr[1])
    localStorage.setItem('variable',obj)  
  }
  eliminar(){
    localStorage.removeItem('variable')  
  } 
  mostrar(){
    let guardado = JSON.parse(localStorage['variable']);
    return guardado;
  }

  
}
