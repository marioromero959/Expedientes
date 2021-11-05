import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataP1Service } from 'src/app/servicios/datos/data-pasos/dataP1/data-p1.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-habilitaciones',
  templateUrl: './habilitaciones.page.html',
  styleUrls: ['./habilitaciones.page.scss'],
})

export class HabilitacionesPage implements OnInit {
  // Formularios
  paso1: FormGroup;
  paso2: FormGroup;
  paso3: FormGroup;
  paso4: FormGroup;
  paso5: FormGroup;
  isEditable = true;
  // Variables para almacenar datos del backend 
  arrPersonas:any;
  arrSolicitudes:any;
// Variables y condiciones
condicionP1Solicitud:boolean = false;
condicionP2TipoPersona:string = '';
condicionP3Local:boolean = true;
condicionP4Alquiler:boolean = false;


  constructor(
    private _formBuilder: FormBuilder,
    private dataP1Svc: DataP1Service,
    private alerta: AlertController,
    ) { }

  ngOnInit() {


    // construccion formularios
    this.paso1 = this._formBuilder.group({
      cuit: ['', Validators.required],
      cuenta: [{value:'', disabled:false}, Validators.required],
      tipoPersona: ['', Validators.required],
      tipoLocal: ['', Validators.required],
      solicitud: ['', Validators.required],
    });
    this.paso2 = this._formBuilder.group({
      razon: [''],
      fechaInscripcion: [''],
      tipoSocietario: [''],
      cierre: [''],
      apellido: ['', Validators.required],
      nombres: ['', Validators.required],
      dni: [''],
      fechaNacimiento: ['', Validators.required],
      domicilio: [''],
      localidad: [''],
      nacionalidad: ['', Validators.required],
      cuit: [''],
      caracter: ['', Validators.required],
    });
    this.paso3 = this._formBuilder.group({
       // Domicilio Fiscal
    domFiscal: this._formBuilder.group({
      calle: ['', Validators.required],
      numeroCalle: ['', Validators.required],
      piso: ['', Validators.required],
      provincia: ['', Validators.required],
      localidad: ['', Validators.required],
      codPostal: ['', Validators.required],
      }),
    //Domicilio comercial
      domComercial: this._formBuilder.group({
        calleC: ['', Validators.required],
        numeroCalleC: ['', Validators.required],
        pisoC: ['', Validators.required],
        provinciaC: ['', Validators.required],
        localidadC: ['', Validators.required],
        codPostalC: ['', Validators.required],
        partida: ['', Validators.required],
        alquilado: ['', Validators.required],
        })
    });
    this.paso4 = this._formBuilder.group({
      id: ['', Validators.required],
      apellido: ['', Validators.required],
      nombres: ['', Validators.required],
    });
    this.paso5 = this._formBuilder.group({
      fantasia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
    // Traer data del back
    this.dataP1Svc.obtenerPersonas().subscribe(res=>{
      this.arrPersonas = res;
     })
    this.dataP1Svc.obtenerSolicitudes().subscribe(res=>{
      this.arrSolicitudes = res;
    })

  }
// PASO 1 ----------------
get solicitudField(){return this.paso1.get('solicitud');}

solicitud(event){
  // Desabilito el input de Nro de cuenta y vacio el array de tipos 
if((event.includes(1) || event.includes(9)) &&  event.length > 1){
  this.condicionP1Solicitud = true;
}else if(event.includes(1) && event.length == 1){
  this.paso1.get('cuenta').patchValue('');
  this.paso1.controls['cuenta'].disable();
  this.condicionP1Solicitud = false;
}else{
  this.paso1.controls['cuenta'].enable();
  this.condicionP1Solicitud = false;
}
};

enviarP1(){
  if(this.paso1.invalid){
      this.presentAlert();
  }else{
    console.log(this.paso1.value)
  }
// Modificamos el paso 2
if(this.paso1.value.tipoPersona == 1){
  this.condicionP2TipoPersona = "Persona Fisica"
  this.paso2.get('caracter').patchValue('Titular');
  this.paso2.controls['caracter'].disable();
  // Seteamos Validaciones
  this.paso2.get('dni').setValidators(Validators.required);
}else if(this.paso1.value.tipoPersona == 2){
  this.condicionP2TipoPersona = "Persona Juridica"
  this.paso2.get('caracter').patchValue('');
  this.paso2.controls['caracter'].enable();
  // Seteamos Validaciones
  this.paso2.get('razon').setValidators(Validators.required);
  this.paso2.get('fechaInscripcion').setValidators(Validators.required);
  this.paso2.get('tipoSocietario').setValidators(Validators.required);
  this.paso2.get('cierre').setValidators(Validators.required);
  this.paso2.get('domicilio').setValidators(Validators.required);
  this.paso2.get('localidad').setValidators(Validators.required);
  this.paso2.get('cuit').setValidators(Validators.required);
}
}

// PASO 2 ---------------
enviarP2(){
  if(this.paso2.invalid){
    this.presentAlert();
  }else{
    console.log(this.paso2.value)
  }
// Modificamos el paso 3
if(this.paso1.value.tipoLocal === '1'){
  // Si tiene local añadimos el control de domComercial
  this.condicionP3Local = true;
  this.paso3.addControl('domComercial',this._formBuilder.group({
    calleC: ['', Validators.required],
    numeroCalleC: ['', Validators.required],
    pisoC: ['', Validators.required],
    provinciaC: ['', Validators.required],
    localidadC: ['', Validators.required],
    codPostalC: ['', Validators.required],
    partida: ['', Validators.required],
    alquilado: ['', Validators.required],
    }));
}else{
  // Si no tiene quitamos el control de domComercial
  this.condicionP3Local = false;
  this.paso3.removeControl('domComercial');
}
}

// PASO 3 -------------
domicilio(event){
  if(event === 'si'){
    this.paso3.get(['domComercial','calleC']).patchValue(this.paso3.value.domFiscal.calle);
    this.paso3.get(['domComercial','numeroCalleC']).patchValue(this.paso3.value.domFiscal.numeroCalle);
    this.paso3.get(['domComercial','pisoC']).patchValue(this.paso3.value.domFiscal.piso);
    this.paso3.get(['domComercial','provinciaC']).patchValue(this.paso3.value.domFiscal.provincia);
    this.paso3.get(['domComercial','localidadC']).patchValue(this.paso3.value.domFiscal.localidad);
    this.paso3.get(['domComercial','codPostalC']).patchValue(this.paso3.value.domFiscal.codPostal); 
  }else if(event === 'no'){
    this.paso3.get(['domComercial','calleC']).patchValue('');
    this.paso3.get(['domComercial','numeroCalleC']).patchValue('');
    this.paso3.get(['domComercial','pisoC']).patchValue('');
    this.paso3.get(['domComercial','provinciaC']).patchValue('');
    this.paso3.get(['domComercial','localidadC']).patchValue('');
    this.paso3.get(['domComercial','codPostalC']).patchValue('');
  }
}

// Determinamos si es alquilado o no para mostrar el paso 4
alquilado(event){
  if(event === '1'){
    this.condicionP4Alquiler = true;
  }else{
    this.condicionP4Alquiler = false;
  }
}

enviarP3(){
  if(this.paso3.invalid){
    this.presentAlert();
    console.log(this.paso3)
  }else{
    console.log(this.paso3)
  }
}

// PASO 4 -------------
enviarP4(){
  if(this.paso4.invalid){
    this.presentAlert();
  }else{
    console.log(this.paso4.value)
  }
}

// PASO 5 -------------
enviarP5(){
  console.log('Fin p5')
}




// alerta
async presentAlert() {
  const alert = await this.alerta.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incompletos',
    subHeader: 'Por favor, complete todos los campos para continuar.',
    buttons: ['OK']
  });

await alert.present();
};
}