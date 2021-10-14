import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { User } from '../shared/interface/interfaz-usuario';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage{

  userData = [{
    id: null,
    usuario: '',
    nombre: '',
    apellido: '',
    email: '',
    dni: null,
    pass: '',
    repass: '',
  }];
  pass=false;

  constructor(
    private router:Router,
    private auth:AutenticacionService,
    private alertCtrl:AlertController) { }
    
  ionViewWillEnter(){
    this.userData = JSON.parse(localStorage.getItem('Usuario'));
  }

  editar(){
    this.router.navigate(['/editar-perfil'])
  }
  mostrarPass(){
    this.pass = true;
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Salir de MiGualeguay?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
        }, {
          text: 'Aceptar',
          cssClass: 'aceptar',
          handler: () => {
            // Borrar tokens con los datos del usuario
            this.auth.deleteToken();
            this.router.navigate(['login']);
          }
        }
      ]
    });

  await alert.present();
  };
  
}
