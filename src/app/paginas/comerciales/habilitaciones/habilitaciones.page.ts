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
      apellido: ['',Validators.required],
      nombres: ['',Validators.required],
      dni: [''],
      domicilio: [''],
      localidad: [''],
      nacionalidad: ['',Validators.required],
      cuit: ['']
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
        calleC: [''],
        numeroCalleC: [''],
        pisoC: [''],
        provinciaC: [''],
        localidadC: [''],
        codPostalC: [''],
        partida: [''],
        alquilado: [''],
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
get solicitudField(){
  return this.paso1.get('solicitud');
}

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
    console.log('Fin p1')
    console.log(this.paso1.value)
  }
// Modificamos el paso 2
if(this.paso1.value.tipoPersona == 1){
  this.condicionP2TipoPersona = "Persona Fisica"
}else if(this.paso1.value.tipoPersona == 2){
  this.condicionP2TipoPersona = "Persona Juridica"
}


}
// PASO 2 ---------------




enviarP2(){
  console.log('Fin p2')
}

// ------------
enviarP3(){
  console.log('Fin p3')
}
enviarP4(){
  console.log('Fin p4')
}
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