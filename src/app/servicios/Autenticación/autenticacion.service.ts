import {  Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/interface/interfaz-de-usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public user$:Observable<Usuario>;
usuario:string='hola';
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
 /*    this.user$ = this.afAuth.authState.pipe(
      switchMap((user)=>{
        if(user){
          return this.afs.doc<Usuario>(`users/${user.uid}`).valueChanges();
        }else{
          return of(null);
        }
      })
    ) */
  }

async resetpassword(email:string):Promise<void>{
  try{
    return this.afAuth.sendPasswordResetEmail(email);
  }
  catch(error){
    console.log(error.message);
  }
}

async loginGoogle():Promise<Usuario>{
  try{
    const { user } = await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
    this.updateUserData(user);
    return user;
  }
  catch(error){
    console.log(error.message);
  }
}

async register(email:string, password:string):Promise<Usuario>{
  try{
    const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await this.sendVerificacion();
    return user;
  }
  catch(error){
    console.log(error.message);
  }
}

async login(email:string, password:string):Promise<Usuario>{
  try{
    const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.updateUserData(user);
    return user;
  }
  catch(error){
    console.log(error.message);
  }
}

async sendVerificacion():Promise<void>{
  try{
    return (await this.afAuth.currentUser).sendEmailVerification();
  }
  catch(error){
    console.log(error.message);
  }
}

emailVerified(user:Usuario):boolean{
  try{
    return user.emailVerified === true ? true:false;
  }
  catch(error){
    console.log(error.message);
  }
}

async logout():Promise<void>{
  try{
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
  catch(error){
    console.log('Error: ',error.message)
  }
}

private updateUserData(user:Usuario){
  const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc(`users/${user.uid}`);
  
  const data:Usuario = {
    uid: user.uid,
    email: user.email,
    emailVerified: user.emailVerified,
    displayName: user.displayName
  };

  return userRef.set(data,{merge:true});
}
getUsuarios(){
  return this.afs.collection('users').snapshotChanges().pipe(map(users =>{
    return users.map(a=>{
      const data = a.payload.doc.data() as Usuario;
      return data;
    })
  }));
}
}
