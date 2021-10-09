import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';
import { User } from '../shared/interface/interfaz-registrado';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  crearUsuarios: FormGroup;
  registrado = false;

  prueba:string=null;


  passwordToggleIcon = "eye";
  rePasswordToggleIcon = "eye";
  showPassword = false;
  showRePassword= false;

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

  editarUsuario(){
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
      pass: this.crearUsuarios.value.pass,
      repass: this.crearUsuarios.value.repass,
    }

    // ver esta funcion en el data.ts
    this.datos.agregarUsuario(this.crearUsuarios.value).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/home']);
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
