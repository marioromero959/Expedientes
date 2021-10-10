import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from './servicios/Autenticación/autenticacion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private auth: AutenticacionService,
    private router: Router,
    private alertCtrl:AlertController
  ) {}

  async logout() {
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
