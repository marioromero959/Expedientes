import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatosService } from '../servicios/datos/datos.service';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Usuarios:any;
  userData:any;

  constructor(
    private menu:MenuController,
    private data:DatosService,
    private auth:AutenticacionService,
    private alertCtrl:AlertController,
    private router: Router) {
    }

  ngOnInit(){}
  // Abrir y cerrar menu lateral
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

// agregar ventana de Confirmación

  borrarUsuario(id){
    console.log('borrado');
    console.log(id);
    // this.data.borrarUsuario(id).subscribe();
  }

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
            this.auth.deleteToken();
            this.router.navigate(['login']);
          }
        }
      ]
    });

  await alert.present();
  };
}
