import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['./paso2.page.scss'],
})
export class Paso2Page implements OnInit {

  dataPaso2: FormGroup;
  tipoSocietario:string = '';
  inscripcion:Date;


  constructor(
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
  ) { 
    this.miForm();
  }

  ngOnInit() {}

fechaIns(event){
  this.inscripcion = new Date(event.detail.value);
  console.log(this.inscripcion);
}

  tipo(event){
    this.tipoSocietario = event.detail.value;
    console.log(this.tipoSocietario);
  }

  terminarP2(event){
    if (this.dataPaso2.valid) {
      const value = {
        razon: this.dataPaso2.value.razon,
        societario: this.tipoSocietario,
      };
      console.log(value);
      if(value.razon == ''){
        this.presentAlert();
      }else{
        this.router.navigate(['/comerciales/2']);
      };
    }
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incompletos',
      subHeader: 'Por favor, complete todos los campos.',
      buttons: ['OK']
    });

  await alert.present();
  };
  private miForm(){
    this.dataPaso2 = this.fb.group({
      razon: ['', [Validators.required,]],
    })
  }

}
