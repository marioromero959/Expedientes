import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carga-act',
  templateUrl: './carga-act.page.html',
  styleUrls: ['./carga-act.page.scss'],
})
export class CargaActPage implements OnInit {

  @Input() tipo;
  @Input() fecha;

  tipoAct:string = '';
  fechaInicio: Date;

  constructor(
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }

  act(event){
    this.tipoAct = event.detail.value;
  }
  fechaInicioBaja(event){
    this.fechaInicio = new Date(event.detail.value);
  }

  enviarAct(event){
    // creamos el objeto
    this.modalCtrl.dismiss({
      tipo:this.tipoAct,
      fecha:this.fechaInicio,
    }); 
  }

}
