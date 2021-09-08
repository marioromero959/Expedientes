import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carga-estudio',
  templateUrl: './carga-estudio.page.html',
  styleUrls: ['./carga-estudio.page.scss'],
})
export class CargaEstudioPage implements OnInit {

  formEstudio:FormGroup;
  @Input() estudio;
  @Input() telefono;
  @Input() email;

  constructor(
    private fb: FormBuilder,
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
  ) {
    this.miForm();
   }

  ngOnInit() {
  }

agregarEst(event){
  if(this.formEstudio.invalid){
    this.formEstudio.markAllAsTouched();
    this.presentAlert();
  }else{
    this.modalCtrl.dismiss({
      estudio: this.formEstudio.value.estudio,
      telefono:this.formEstudio.value.telefono,
      email:this.formEstudio.value.email,
    });
  }
}

miForm(){
  this.formEstudio = this.fb.group({
  estudio: ['',Validators.required],
  telefono: ['',Validators.required],
  email: ['',[Validators.required,Validators.email]],
  })
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

volver(){
  this.modalCtrl.dismiss();
}

}
