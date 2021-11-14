import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalCadetesPage } from './modal-cadetes/modal-cadetes.page';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.page.html',
  styleUrls: ['./deliveries.page.scss'],
})
export class DeliveriesPage implements OnInit {

busquedaNegocios = new FormControl('');
busquedaCadetes = new FormControl('');

negocios:string[] = ['Alimentos','Bebidas','Cafeterias','Calzado e Indumentaria','Carnicerias','Corralones','Emprendedores','Farmacias','Ferreterias','Fruterías y Verdulerías','Gastronómicos','Heladerías','Informática','Kioscos','Librerías','Panaderías','Pinturerías','Pollerías','Resmises','Rotiserías','Varios'];


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(value) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        seleccion: value,
      }
    });
    return await modal.present();
  }
  async abrirModalCadetes() {
    const modal = await this.modalCtrl.create({
      component: ModalCadetesPage,
      cssClass: 'my-custom-class',
      componentProps: {
        seleccion: 1,
      }
    });
    return await modal.present();
  }

listar(e){
  console.log(e)
}

}
