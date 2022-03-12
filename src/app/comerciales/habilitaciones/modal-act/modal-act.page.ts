import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos/datos.service';

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
  arrActividades:any;
  searchFilter = new FormControl('')

  constructor(
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
    private _formBuilder: FormBuilder,
    private datos: DatosService,
  ) { }

  ngOnInit() {
    this.actividades = this._formBuilder.group({
      fechaInicioBaja: [''],
      actividad: [''],
    })
    this.datos.obtenerActividadesComerciales().subscribe(res=>{
      this.arrActividades = res
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
