import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';
import { User } from '../shared/interface/interfaz-registrado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  crearUsuarios: FormGroup;
  registrado = false;

  passwordToggleIcon = "eye";
  rePasswordToggleIcon = "eye";
  showPassword = false;
  showRePassword= false;

  email:string='';
  password:string='';

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
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      repassword:['',[Validators.required,Validators.minLength(6)]],
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
    }
    const usuario: User = {
      usuario: this.crearUsuarios.value.usuario,
      dni: this.crearUsuarios.value.dni,
      nombre: this.crearUsuarios.value.nombre,
      apellido: this.crearUsuarios.value.apellido,
      email: this.crearUsuarios.value.email,
      password: this.crearUsuarios.value.password,
      repassword: this.crearUsuarios.value.repassword,
    }
    this.datos.agregarUsuario(this.crearUsuarios.value).subscribe(res =>{
      // ejecutar funcion php en backend para mandar el mail de verificacion
      this.router.navigate(['/verificacion']);
    });
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
  return this.crearUsuarios.get('password');
}
get repasswordField(){
  return this.crearUsuarios.get('repassword');
}
  
  irALogin(){
    this.router.navigate(['/login']);
  }
}
