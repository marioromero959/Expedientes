import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cadetes',
  templateUrl: './modal-cadetes.page.html',
  styleUrls: ['./modal-cadetes.page.scss'],
})
export class ModalCadetesPage implements OnInit {

cadetes = [1,2,3,4,5]

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
cerrarModal(){
  this.modalCtrl.dismiss();
}
}
