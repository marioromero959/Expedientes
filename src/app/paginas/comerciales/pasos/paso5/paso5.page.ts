import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController, ModalController } from '@ionic/angular';
import { CargaActPage } from '../carga-act/carga-act.page';
import { CargaEstudioPage } from '../carga-estudio/carga-estudio.page';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso5',
  templateUrl: './paso5.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso5Page implements OnInit, OnDestroy {

  dataPaso5: FormGroup;
  mostratAct:boolean = false;
  mostrarEstudio:boolean = false;
  actividades = [];
  estudio = [];
  value:any[] = [];
  cambio;
  paso:number;
  disabledButton:boolean = false;
  navegacion:string = '';

  private suscripcionForm1: Subscription;
  private suscripcionForm2: Subscription;

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private modalCtrl:ModalController,
    private formData:FormulariosService,
    ) {
    //Recibo de paso 3 si es propietario o alquiler 
 /*    this.suscripcionForm1 = this.formData.escucharData().subscribe(res =>{
      if(res[2].domComercial != undefined){
        this.cambio = res[2].domComercial.alquilado;
      }else{
        this.cambio = 'Propietario'
      }
         (this.cambio == 'Alquiler') ? this.paso = 5 : this.paso = 4;
         (this.cambio == 'Alquiler') ? this.navegacion = '/comerciales/4' : this.navegacion = '/comerciales/3';
      }) */
      this.miForm();
    }

  ngOnInit() {}
  terminarP5(event){
    if(this.dataPaso5.invalid || this.mostratAct === false){
      this.dataPaso5.markAllAsTouched();
      this.presentAlert();
    }else{
      if(this.value[1] !== null){
        this.value.splice(2,1,this.dataPaso5.value);
      }else{
        this.value.splice(1,1,this.dataPaso5.value);
      }
     this.suscripcionForm2 = this.formData.mandar(this.value,this.paso - 1).subscribe();
     console.log(this.value) 
     // this.router.navigate(['/comerciales/6'])
    }
  }

borrarEstudio(){
  this.estudio.splice(0,1)
  this.mostrarEstudio = false;
}

borrarAct(id){
  this.actividades.splice(id,1)
  if(this.actividades.length == 0){
    this.mostratAct = false;
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
        this.value.splice(0,1,this.actividades)
        this.mostratAct = true;
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
    if(data === undefined){
      console.log('Cancelado');
    }else{
      this.estudio.push(data);
      this.value.splice(1,0,this.estudio);
      this.mostrarEstudio = true;
    }
}
ngOnDestroy(){
  if(this.suscripcionForm1)
  this.suscripcionForm1.unsubscribe();
  if(this.suscripcionForm2)
  this.suscripcionForm2.unsubscribe();
}
}