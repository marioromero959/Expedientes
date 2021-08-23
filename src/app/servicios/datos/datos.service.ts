import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private afs:AngularFirestore
  ) { }


// Agrega un usuario a la coleccion Usuarios
agregarUsuario(usuario:any):Promise<any>{
  return this.afs.collection('Usuarios').add(usuario);
}

obtenerUsuarios():Observable<any>{
  return this.afs.collection('Usuarios').snapshotChanges();
}

eliminarUsuario(id:string):Promise<any>{
  return this.afs.collection('Usuarios').doc(id).delete();
}
}
