import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso3Page implements OnInit {

  condicion:boolean = true;
  dataPaso3: FormGroup;
  domFiscal:FormGroup;
  domComercial:FormGroup;
  opSelect:string = '';
  seleccion:string = '';
  local:string;

  constructor(    
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private formData:FormulariosService,
    ) {
      // Recibo si tiene local o no desde el paso 1
      this.formData.obtener().subscribe(res =>{
        this.local = res[1];
      })
    this.miForm();    
    }

  ngOnInit() {
    // En caso de poseer local, agrego validacoines a los campos de domicilio comercial
    if(this.local != 'no'){
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
    // Si tengo local mando ambos domicilios
    if(this.local != 'no'){
      this.formData.mandar(this.dataPaso3.value).subscribe();
      // Envio si es alquilado o no
      this.formData.enviar(this.seleccion).subscribe();
      if(this.seleccion == 'Alquiler'){
        this.router.navigate(['/comerciales/4'])
      }else{
        this.router.navigate(['/comerciales/5'])
      }
      // Sino solo domicilio fiscal
    }else{
      this.formData.mandar(this.dataPaso3.value.domFiscal).subscribe();
      // (Mostrar 5 como 4)
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


}




