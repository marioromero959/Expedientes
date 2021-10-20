import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisValidaciones } from '../shared/utils/mis-validaciones'
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';

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
  users;
  errores = [false,false,false];

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private datos:DatosService,
  ) { 
    this.crearUsuarios = this.fb.group({
      usuario:['',Validators.required],
      dni:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      pass:['',Validators.required],
      repass:['',Validators.required],
    })
  }

  ngOnInit() {}

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
    this.datos.altaUsuario(this.crearUsuarios.value).subscribe(
      res=>{
        // Esperar el id del error
        // if(res[0].includes('Usuario')){
          // this.errores[0] = true;
        // }else if(res[0].includes('DNI')){
          // this.errores[1] = true;
        // }else if(res[0].includes('Email')){
          // this.errores[2] = true;
        // }
        console.error(res)
      }
    );
    // this.router.navigate(['/verificacion']);
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
