import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosService } from '../servicios/datos/datos.service';
import { AlertController } from '@ionic/angular';
import { User } from '../shared/interface/interfaz-usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  crearUsuarios: FormGroup;
  passwordToggleIcon = "visibility";
  rePasswordToggleIcon = "visibility";
  showPassword = false;
  showRePassword = false;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private datos:DatosService,
    private alertCtrl:AlertController,
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
    if(this.passwordToggleIcon == 'visibility'){
      this.passwordToggleIcon = 'visibility_off';
    }else{
      this.passwordToggleIcon = 'visibility';
    }
  };
  toggleRePass(){
    this.showRePassword =! this.showRePassword;
    if(this.rePasswordToggleIcon == 'visibility'){
      this.rePasswordToggleIcon = 'visibility_off';
    }else{
      this.rePasswordToggleIcon = 'visibility';
    }
  };

  registrarUsuario(){
    if(this.crearUsuarios.invalid){
      this.crearUsuarios.markAllAsTouched();
      this.presentAlert('Por favor, complete los campos para continuar')
      return;
    }else{
    //Envio la data al back
    const usuario:User = this.crearUsuarios.value; 
    this.datos.altaUsuario(usuario).subscribe((res:any)=>{
      const {status} = res;
      (status !== 'correcto') ? this.presentAlert(status) : this.router.navigate(['/verificacion']);
      });
    } 
  }

async presentAlert(error) {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Ocurrió un problema',
    subHeader: error,
    buttons: ['OK']
  });

await alert.present();
};

irALogin(){
  this.router.navigate(['/login']);
}

ionViewWillLeave(){
  this.crearUsuarios.reset(); 
}

}
