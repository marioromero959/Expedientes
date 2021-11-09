import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-carga-act',
  templateUrl: './carga-act.page.html',
  styleUrls: ['./carga-act.page.scss'],
})
export class CargaActPage implements OnInit {

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

/*   enviarAct(event){
    // creamos el objeto
    if(this.fechaInicio == '' || this.tipoAct == ''){
      this.presentAlert();
    }else{ 
    this.modalCtrl.dismiss({
      tipo:this.tipoAct,
      fecha:this.fechaInicio,
    });
    }
  } */

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
