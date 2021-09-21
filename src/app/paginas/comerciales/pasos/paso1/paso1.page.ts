import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';
import { forEach } from '@angular-devkit/schematics';
@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso1Page implements OnInit {

  dataPaso1:FormGroup;
  opcionSelec:string ='';
  persona: string ="";
  solic:any[]=[];
  mostrar = true;
  condicion = false;  
  public tipos = [
    {value: 'Ampliación de rubro'},
    {value: 'Apertura de sucursal'},
    {value: 'Cambio de domicilio'},
    {value: 'Cambio de Responsable'},
    {value: 'Cambio de rubro'},
    {value: 'Cese de Actividad'},
    {value: 'Rehabilitación'},
    {value: 'Cierre Definitivo'},
    {value: 'Solicitud de Inscripción'}
  ];

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
    if(event.detail.value == ''){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
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
      this.dataPaso1.controls['cuenta'].enable();
      this.condicion = false;
    }


    // console.log(event.detail.value);


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
      // cambiar if ---------
      if(value.tipo == '' || value.local == ''){
        this.presentAlert();
      }else{
        this.formData.mandar(value).subscribe();
        console.log(value);
        // this.router.navigate(['/comerciales/2']);
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
}
