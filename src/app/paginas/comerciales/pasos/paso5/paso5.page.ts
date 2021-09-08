import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController, ModalController } from '@ionic/angular';
import { CargaActPage } from '../carga-act/carga-act.page';
import { CargaEstudioPage } from '../carga-estudio/carga-estudio.page';
@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.page.html',
  styleUrls: ['./paso5.page.scss'],
})
export class Paso5Page implements OnInit {

  dataPaso5: FormGroup;
  mostrar:boolean = false;
  actividades = [];

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private modalCtrl:ModalController,
    ) {
      this.miForm();
    }

  ngOnInit() {
  }
  terminarP5(event){
    if(this.dataPaso5.invalid || this.mostrar == false){
      this.dataPaso5.markAllAsTouched();
      this.presentAlert();
    }else{
      this.router.navigate(['/comerciales/6'])
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
    this.dataPaso5 = this.fb.group({
    fantasia: ['',Validators.required],
    telefono: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    })
  }


async agregarAct(){
  const modal = await this.modalCtrl.create(
    {
      component: CargaActPage,
      componentProps:{
        tipo: '',
        fecha: '',
      },
      cssClass: 'my-custom-class'
    }
  )
  await modal.present();
  const { data } = await modal.onDidDismiss();
      if(data === undefined){
        console.log('Cancelado');
      }else{
        this.actividades.push(data);
        this.mostrar = true;
        console.log(this.actividades);
      }
}

async  agregarEstudio(){
    const modal = await this.modalCtrl.create(
      {
        component: CargaEstudioPage,
        componentProps:{
          estudio: '',
          telefono: '',
          email: '',
        },
        cssClass: 'my-custom-class'
      }
    )
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('Data desde el modal de estudio', data);
  }
  
}
