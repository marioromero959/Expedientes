import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  userData: any[] = [
    {
      correo:'marioromero@gmail.com',
      direccion:'Yunka y Ayachucho',
      celular:'+54123456789',
      telefono:'404567893',
      localidad:'Cordoba Capital',
      usuario:'Mario959',
      contrasena:'abcd1234',
    }
  ]

  constructor(
    private router:Router,
    private auth:AutenticacionService,
    private alertCtrl:AlertController) { }

  ngOnInit() {
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
            // this.auth.deleteToken();
            this.router.navigate(['login']);
          }
        }
      ]
    });

  await alert.present();
  };
  
}
