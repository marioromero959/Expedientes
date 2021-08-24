import { Component} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AutenticacionService } from '../servicios/Autenticación/autenticacion.service';
import { DatosService } from '../servicios/datos/datos.service';
import { Usuario } from '../shared/interface/interfaz-de-usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 /*  // public Usuarios:Usuario[] = []; 

  usuarios:any[]=[];
  usuario:string ='marito';
 */
  constructor(
    private menu:MenuController,
    private auth: AutenticacionService,
    private data:DatosService) {
    }

  ngOnInit(){}

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

}
