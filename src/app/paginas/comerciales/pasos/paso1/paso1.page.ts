import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';
@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso1Page implements OnInit {

  dataPaso1:FormGroup;
  opcionSelec:string ='';
  persona: string ="";
  solic: string ="";

  prueba:string ="testeo";
   
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private formData:FormulariosService,
  ) {
    this.miForm();
  }
  ngOnInit() {
  }

  tipo(event){
    this.persona = event.detail.value;
  }
  select(event){
    this.opcionSelec = event.detail.value;
  };
  solicitud(event){
    this.solic = event.detail.value;
  };

  terminarP1(event){
    if (this.dataPaso1.valid) {
      const value = {
        cuit: this.dataPaso1.value.cuit,
        cuenta:this.dataPaso1.value.cuenta,
        tipo:this.persona,
        local:this.opcionSelec,
        solicitud:this.solic,
      };
      if(value.tipo == '' || value.local == '' || value.solicitud == ''){
        this.presentAlert();
      }else{
        this.formData.mandar(value).subscribe();
        this.router.navigate(['/comerciales/2']);
      };
    }else{
      this.presentAlert();
      this.dataPaso1.markAllAsTouched();
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

  private miForm(){
    this.dataPaso1 = this.fb.group({
      cuit: ['', [Validators.required,Validators.minLength(10)]],
      cuenta: ['', [Validators.required,Validators.minLength(10)]],
    })
  }
}
