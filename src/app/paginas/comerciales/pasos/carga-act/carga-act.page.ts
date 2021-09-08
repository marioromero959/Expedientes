import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

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
    private alertCtrl:AlertController,
  ) { }

  ngOnInit() {
  }

  act(event){
    this.tipoAct = event.detail.value;
  }
  fechaInicioBaja(event){
    this.fechaInicio = new Date(event.detail.value);
  }

  volver(){
    this.modalCtrl.dismiss();
  }


  enviarAct(event){
    // creamos el objeto
    if(this.fechaInicio == undefined || this.tipoAct == ''){
      this.presentAlert();
    }else{ 
    this.modalCtrl.dismiss({
      tipo:this.tipoAct,
      fecha:this.fechaInicio,
    });
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incompletos',
      subHeader: 'Por favor, complete todos los campos para continuar.',
      buttons: ['OK']
    });
  await alert.present();
  };
}
