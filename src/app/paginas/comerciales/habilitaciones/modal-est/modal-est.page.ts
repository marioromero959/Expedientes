import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-est',
  templateUrl: './modal-est.page.html',
  styleUrls: ['./modal-est.page.scss'],
})
export class ModalEstPage implements OnInit {

  formEstudio:FormGroup;
  @Input() estudio;
  @Input() telefono;
  @Input() email;

  constructor(
    private fb: FormBuilder,
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
  ) {}

  ngOnInit() {
    this.formEstudio = this.fb.group({
      estudio: [''],
      telefono: [''],
      email: [''],
      })
  }

agregarEst(){
  if(this.formEstudio.invalid){
    this.presentAlert();
  }else{
    this.modalCtrl.dismiss({
      estudio: this.formEstudio.value.estudio,
      telefono:this.formEstudio.value.telefono,
      email:this.formEstudio.value.email,
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
