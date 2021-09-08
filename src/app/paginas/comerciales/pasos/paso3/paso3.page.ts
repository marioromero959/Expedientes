import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.page.html',
  styleUrls: ['./paso3.page.scss'],
})
export class Paso3Page implements OnInit {

  condicion:boolean = true;
  dataPaso3: FormGroup;
  domFiscal:FormGroup;
  domComercial:FormGroup;
  opSelect:string = '';
  seleccion:string = '';

  constructor(    
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,) { 
    this.miForm();    
    }

  ngOnInit() {
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

  local(event){
    this.seleccion = event.detail.value;
    console.log(this.seleccion)
  }


terminarP3(event){
  if( this.dataPaso3.invalid ){
    this.presentAlert();
    this.dataPaso3.markAllAsTouched();
  }else{
    // Navegacion
    this.router.navigate(['/comerciales/4'])
  };
}

private miForm(){
  this.dataPaso3 = this.fb.group({
    // Domicilio Fiscal
    domFiscal: this.fb.group({
    calle: ['', [Validators.required,]],
    numeroCalle: ['', [Validators.required,]],
    piso: ['', [Validators.required,]],
    provincia: ['', [Validators.required,]],
    localidad: ['', [Validators.required,]],
    codPostal: ['', [Validators.required,]],
    }),
  //Domicilio comercial
    domComercial: this.fb.group({
      calleC: ['', [Validators.required,]],
      numeroCalleC: ['', [Validators.required,]],
      pisoC: ['', [Validators.required,]],
      provinciaC: ['', [Validators.required,]],
      localidadC: ['', [Validators.required,]],
      codPostalC: ['', [Validators.required,]],
      partida: ['', [Validators.required,]],
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




