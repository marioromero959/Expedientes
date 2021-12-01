import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticación/autenticacion.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../shared/interface/interfaz-usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  userData:Usuario;
  nombre:string = "";

  constructor(
    private menu:MenuController,
    private auth:AutenticacionService,
    private alertCtrl:AlertController,
    private router: Router) {}

ionViewWillEnter(){
  this.userData = JSON.parse(localStorage.getItem('Usuario'));
  this.nombre = this.userData.usuario_nombres;
}

  // Abrir y cerrar menu lateral
  public openFirst():void {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  public openEnd():void {
    this.menu.open('end');
  }
  public openCustom():void {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  public async logout():Promise<void> {
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
