import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal-act',
  templateUrl: './modal-act.page.html',
  styleUrls: ['./modal-act.page.scss'],
})
export class ModalActPage implements OnInit {

  @Input() tipo;
  @Input() fecha;

  tipoAct:string = '';
  fechaInicio:string = '';
  actividades: FormGroup;

  constructor(
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.actividades = this._formBuilder.group({
      fechaInicioBaja: [''],
      actividad: [''],
    })
  }

agregar(){
  if(this.actividades.invalid){
    this.presentAlert();
  }else{ 
    this.modalCtrl.dismiss({
      fecha:this.actividades.value.fechaInicioBaja,
      tipo:this.actividades.value.actividad,
    });
  }
}
volver(){
  this.modalCtrl.dismiss();
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
