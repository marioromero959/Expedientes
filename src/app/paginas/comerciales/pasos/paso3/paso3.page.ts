import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso3Page implements OnInit, OnDestroy {

  condicion:boolean = true;
  dataPaso3: FormGroup;
  domFiscal:FormGroup;
  domComercial:FormGroup;
  opSelect:string = '';
  seleccion:string = '';
  local:number;

  private suscripcionForm1: Subscription;
  private suscripcionForm2: Subscription;
  private suscripcionForm3: Subscription;
  private suscripcionForm4: Subscription;

  constructor(    
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private formData:FormulariosService,
    ) {
      // Recibo si tiene local o no desde el paso 1
      this.suscripcionForm1 = this.formData.escucharData().subscribe(res =>{
        this.local = res[0].local;
      })
    this.miForm();    
    }

  ngOnInit() {
    // En caso de poseer local, agrego validacoines a los campos de domicilio comercial
    if(this.local === 1){
      this.dataPaso3.get(['domComercial','calleC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','numeroCalleC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','pisoC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','provinciaC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','localidadC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','codPostalC']).setValidators(Validators.required);
      this.dataPaso3.get(['domComercial','partida']).setValidators(Validators.required);
    }
  }

  select(event){
    this.opSelect = event.detail.value;
    const data = {
      calle: this.dataPaso3.value.domFiscal.calle,
      numero: this.dataPaso3.value.domFiscal.numeroCalle,
      piso: this.dataPaso3.value.domFiscal.piso,
      provincia: this.dataPaso3.value.domFiscal.provincia,
      localidad: this.dataPaso3.value.domFiscal.localidad,
      codigo: this.dataPaso3.value.domFiscal.codPostal,
    }
    if(this.opSelect == "si"){
      this.dataPaso3.get(['domComercial','calleC']).patchValue(data.calle);
      this.dataPaso3.get(['domComercial','numeroCalleC']).patchValue(data.numero);
      this.dataPaso3.get(['domComercial','pisoC']).patchValue(data.piso);
      this.dataPaso3.get(['domComercial','provinciaC']).patchValue(data.provincia);
      this.dataPaso3.get(['domComercial','localidadC']).patchValue(data.localidad);
      this.dataPaso3.get(['domComercial','codPostalC']).patchValue(data.codigo);
    }else{
      this.dataPaso3.get(['domComercial','calleC']).patchValue('');
      this.dataPaso3.get(['domComercial','numeroCalleC']).patchValue('');
      this.dataPaso3.get(['domComercial','pisoC']).patchValue('');
      this.dataPaso3.get(['domComercial','provinciaC']).patchValue('');
      this.dataPaso3.get(['domComercial','localidadC']).patchValue('');
      this.dataPaso3.get(['domComercial','codPostalC']).patchValue('');
    }
  }

  alquiler(event){
    this.seleccion = event.detail.value;
  }


terminarP3(event){
  if( this.dataPaso3.invalid ){
    this.presentAlert();
    this.dataPaso3.markAllAsTouched();
  }else{
    if(this.local === 1){
      if(this.seleccion == 'Alquiler'){
        this.dataPaso3.get(['domComercial','alquilado']).setValue('Alquiler');
        this.suscripcionForm2 =  this.formData.mandar(this.dataPaso3.value,2).subscribe();
        this.router.navigate(['/comerciales/4'])
      }else{
        this.dataPaso3.get(['domComercial','alquilado']).setValue('Propietario');
        this.suscripcionForm3 =  this.formData.mandar(this.dataPaso3.value,2).subscribe();
        this.router.navigate(['/comerciales/5'])
      }
    }else{
      this.suscripcionForm4 = this.formData.mandar(this.dataPaso3.value.domFiscal,2).subscribe();
      this.router.navigate(['/comerciales/5'])
    }
  }; 
}

private miForm(){
  this.dataPaso3 = this.fb.group({
    // Domicilio Fiscal
    domFiscal: this.fb.group({
    calle: ['', Validators.required],
    numeroCalle: ['', Validators.required],
    piso: ['', Validators.required],
    provincia: ['', Validators.required],
    localidad: ['', Validators.required],
    codPostal: ['', Validators.required],
    }),
  //Domicilio comercial
    domComercial: this.fb.group({
      calleC: [''],
      numeroCalleC: [''],
      pisoC: [''],
      provinciaC: [''],
      localidadC: [''],
      codPostalC: [''],
      partida: [''],
      alquilado: [''],
      })
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

ngOnDestroy(){
  if(this.suscripcionForm1)
  this.suscripcionForm1.unsubscribe();
  if(this.suscripcionForm2)
  this.suscripcionForm2.unsubscribe();
  if(this.suscripcionForm3)
  this.suscripcionForm3.unsubscribe();
  if(this.suscripcionForm4)
  this.suscripcionForm4.unsubscribe();
}

}




