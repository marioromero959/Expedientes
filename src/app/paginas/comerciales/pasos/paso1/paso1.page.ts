import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso1Page implements OnInit, OnDestroy {

  dataPaso1:FormGroup;
  opcionSelec:string ='';
  persona: string ="";
  solic:any[]=[];
  mostrar = true;
  condicion = false;  

  private suscripcionForm1: Subscription;
  private suscripcionForm2: Subscription;

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
  // Obtengo los campos
  tipo(event){
    this.persona = event.detail.value;
  }
  selecLocal(event){
    this.opcionSelec = event.detail.value;
  };
  solicitud(event){
    // Mostrar mensaje de completado
    if(event.detail.value == ''){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
    // Desabilito el input de Nro de cuenta y vacio el array de tipos 
    if(event.detail.value.includes("Solicitud de Inscripción")){
        event.detail.value.splice(0,event.detail.value.length, "Solicitud de Inscripción");
        this.dataPaso1.get('cuenta').patchValue('');
        this.dataPaso1.controls['cuenta'].disable();
        this.condicion = true;
    }else if(event.detail.value.includes("Cierre Definitivo")){
      event.detail.value.splice(0,event.detail.value.length, "Cierre Definitivo");
      this.dataPaso1.controls['cuenta'].enable();
      this.condicion = true;
    }else{
      // Habilito Nro de cuenta y muestro template de error
      this.dataPaso1.controls['cuenta'].enable();
      this.condicion = false;
    }
    this.solic = event.detail.value;
  };

  terminarP1(event){
    if (this.dataPaso1.valid){
      const value = {
        cuit: this.dataPaso1.value.cuit,
        cuenta:this.dataPaso1.value.cuenta,
        tipo:this.persona,
        local:this.opcionSelec,
        solicitud:this.solic,
      };
      if(value.tipo == '' || value.local == '' || this.mostrar == true){
        this.presentAlert();
      }else{
        // Envio el formulario al servicio
       this.suscripcionForm1 = this.formData.mandar(value,0).subscribe();
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
      cuenta: [{value:'', disabled:false}, [Validators.required,Validators.minLength(10)]],
    })
  }

  ngOnDestroy():void{
  if(this.suscripcionForm1)
    this.suscripcionForm1.unsubscribe();
    if(this.suscripcionForm2)
    this.suscripcionForm2.unsubscribe();
  } 
}
