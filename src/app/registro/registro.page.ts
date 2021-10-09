import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisValidaciones } from '../shared/utils/mis-validaciones'
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';
import { LocalstorageService } from '../servicios/localstorage/localstorage.service';

import { Observable, from, of} from 'rxjs';
import {tap,map } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, OnDestroy {

  crearUsuarios: FormGroup;
  passwordToggleIcon = "eye";
  rePasswordToggleIcon = "eye";
  showPassword = false;
  showRePassword = false;
  userExiste = true;
  correoExiste = false;

  myObj$:Observable<any>;
  myObj;
  users;
  emailPattern = "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i";

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private datos:DatosService,
    private localS:LocalstorageService
  ) { 

    this.crearUsuarios = this.fb.group({
      usuario:['',Validators.required],
      dni:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:[''],
      pass:['',[Validators.required,Validators.minLength(6)]],
      repass:['',[Validators.required,Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.datos.obtenerUsuarios().subscribe((res)=>{
      this.users = res;
      // Obtengo datos y agrego validaciones
      const usuarios = this.users.map(rta=>(rta.usuario))
      const emails = this.users.map(rta=>(rta.email))
        this.crearUsuarios.get('usuario').setValidators(MisValidaciones.currentUser(usuarios));
        this.crearUsuarios.get('email').setValidators([Validators.required,Validators.pattern(this.emailPattern),MisValidaciones.currentEmail(emails)]);
    })
    
  }

aa(){
  console.log(this.users)
}

  // mostrar u ocultar contraseña
  togglePass(){
    this.showPassword =! this.showPassword;
    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  };
  toggleRePass(){
    this.showRePassword =! this.showRePassword;
    if(this.rePasswordToggleIcon == 'eye'){
      this.rePasswordToggleIcon = 'eye-off';
    }else{
      this.rePasswordToggleIcon = 'eye';
    }
  };

  registrarUsuario(){
    if(this.crearUsuarios.invalid){
      this.crearUsuarios.markAllAsTouched();
      return;
    }else{
    //Envio la data al back 
    this.datos.agregarUsuario(this.crearUsuarios.value).subscribe();
    // ejecutar funcion php en backend para mandar el mail de verificacion
    // Agrego los datos cargados al localstorage
    this.localS.agregar(this.crearUsuarios.value);
    this.router.navigate(['/verificacion']);
    }
  }

  // Obtengo los campos para validar los formularios
get usuarioField(){
  return this.crearUsuarios.get('usuario');
}
get dniField(){
  return this.crearUsuarios.get('dni');
}
get nombreField(){
  return this.crearUsuarios.get('nombre');
}
get apellidoField(){
  return this.crearUsuarios.get('apellido');
}
get emailField(){
  return this.crearUsuarios.get('email');
}
get passwordField(){
  return this.crearUsuarios.get('pass');
}
get repasswordField(){
  return this.crearUsuarios.get('repass');
}
  
irALogin(){
  this.router.navigate(['/login']);
}

ngOnDestroy(){}
}
