import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso4Page implements OnInit, OnDestroy {

  dataPaso4: FormGroup;
  private suscripcionForm1: Subscription;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private formData:FormulariosService,
    ) {
      this.miForm();
    }

  ngOnInit() {
  }

  terminarP4(event){
    if(this.dataPaso4.invalid){
      this.dataPaso4.markAllAsTouched();
      this.presentAlert();
    }else{
     this.suscripcionForm1 = this.formData.mandar(this.dataPaso4.value,3).subscribe();
      this.router.navigate(['/comerciales/5']);
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
    this.dataPaso4 = this.fb.group({
    id: ['', [Validators.required,Validators.minLength(4),]],
    apellido: ['',Validators.required],
    nombres: ['',Validators.required],
    })
  }
  ngOnDestroy(){
    if(this.suscripcionForm1)
    this.suscripcionForm1.unsubscribe();
  }
}
