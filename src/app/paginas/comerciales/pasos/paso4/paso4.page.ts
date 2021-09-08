import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.page.html',
  styleUrls: ['./paso4.page.scss'],
})
export class Paso4Page implements OnInit {

  dataPaso4: FormGroup;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
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
      // console.log(this.dataPaso4.value)
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
}
