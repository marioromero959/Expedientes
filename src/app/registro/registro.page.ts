import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
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
    private auth:AutenticacionService,
    private router:Router,
    private data: DatosService,
    private fb:FormBuilder,
  ) { 

    this.crearUsuarios = this.fb.group({
      usuario:['',Validators.required],
      dni:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      repassword:['',Validators.required],
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
    // Mediante el servicio en datos.ts, agrega un usuario a la coleccion Usuario en Firestore
    this.data.agregarUsuario(usuario).then(()=>{
      if(usuario){
        console.log('Registro Exitoso');
        this.email = this.crearUsuarios.get(['email']).value;
        this.password = this.crearUsuarios.get(['password']).value;
        // this.router.navigate(['/verificacion']);
        this.onRegister(this.email,this.password);
      }
    }).catch(error => {
      console.log(error);
    });

  }

    // Mediante el servicio en autenticacion.ts, agrega un usuario a la coleccion users en Firestore
  async onRegister(email:string, password:string){
    try{
      const user = await this.auth.register(email, password);
      if(user){
        console.log('Usuario registrado con auth');
        // this.router.navigate(['/verificacion']);
      }
    }
    catch(error){
      console.log(error);
    }
  }

/*
  redirectUser(isVerified:boolean){
    if(isVerified){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/verificacion']);
    }
  } */

  irALogin(){
    this.router.navigate(['/login']);
  }
}