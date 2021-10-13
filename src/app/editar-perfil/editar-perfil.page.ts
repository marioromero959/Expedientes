import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  UsuarioEditado: FormGroup;
  registrado = false;
  prueba:string=null;

  passwordToggleIcon = "eye";
  rePasswordToggleIcon = "eye";
  showPassword = false;
  showRePassword= false;

  constructor(
    private router:Router,
    private alertCtrl: AlertController,
    private fb:FormBuilder,
    private datos:DatosService,
  ) { 
    let perfil = JSON.parse(localStorage['Usuario']);
    console.log('localstorage:',perfil);

    this.UsuarioEditado = this.fb.group({
      id:[perfil.id],
      usuario:[perfil.usuario,Validators.required],
      dni:[perfil.dni,Validators.required],
      nombre:[perfil.nombre,Validators.required],
      apellido:[perfil.apellido,Validators.required],
      email:[perfil.email,[Validators.required,Validators.email]],
      pass:[perfil.pass,[Validators.required,Validators.minLength(6)]],
      repass:[perfil.repass,[Validators.required,Validators.minLength(6)]],
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
    if(this.UsuarioEditado.invalid){
      this.UsuarioEditado.markAllAsTouched();
      return;
    }else{
    }
    this.presentAlert(this.UsuarioEditado.value);
  }

  async presentAlert(usuario) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Esta seguro de que desea editar sus datos?',
      buttons: [
        {
          text:'cancelar',
          role:'cancel'
        },
        {
          text:'Si, estoy seguro',
          handler: () =>{
          this.confirmarEdicion(usuario);
          }
        }
      ]
    });

  await alert.present();
  };

confirmarEdicion(usuario){
  this.datos.editarUsuario(usuario).subscribe();
  const obj = JSON.stringify(usuario)
  localStorage.setItem('Usuario',obj)
  window.location.reload();
}

  // Obtengo los campos para validar los formularios
get usuarioField(){
  return this.UsuarioEditado.get('usuario');
}
get dniField(){
  return this.UsuarioEditado.get('dni');
}
get nombreField(){
  return this.UsuarioEditado.get('nombre');
}
get apellidoField(){
  return this.UsuarioEditado.get('apellido');
}
get emailField(){
  return this.UsuarioEditado.get('email');
}
get passwordField(){
  return this.UsuarioEditado.get('pass');
}
get repasswordField(){
  return this.UsuarioEditado.get('repass');
}

irALogin(){
  this.router.navigate(['/login']);
}

}
