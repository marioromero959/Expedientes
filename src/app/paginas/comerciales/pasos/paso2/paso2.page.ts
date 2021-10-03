import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['../estilos-pasos.scss'],
})
export class Paso2Page implements OnInit, OnDestroy {

  dataPaso2: FormGroup;
  tipoSocietario:string = '';
  inscripcion:string = '';
  cierre:string = '';
  nacimiento:string = '';
  caracter:string = '';
  persona: any;
  tipoPersona:string;
  desabilitado = false;
  valor = '';

  private suscripcionForm1: Subscription;
  private suscripcionForm2: Subscription;
  private suscripcionForm3: Subscription;

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
    private formData:FormulariosService,
  ) {
    // Obtengo el tipo de persona
    this.suscripcionForm1 = this.formData.escucharData().subscribe(res => {
      this.persona = res[0].tipo;
      if(res[0].tipo == "Persona Juridica"){
        this.tipoPersona = "Persona Juridica";
      }else{
        this.desabilitado = true;
        this.valor = "Titular";
        this.caracter = "Titular"
      };
    })
    this.miForm();
  }

  ngOnInit() {
    // Agrego validaciones dependiendo el tipo de persona
    if(this.tipoPersona != "Persona Juridica")
    this.dataPaso2.get('dni').setValidators(Validators.required);
    if(this.tipoPersona == "Persona Juridica"){
    this.dataPaso2.get('razon').setValidators(Validators.required);
    this.dataPaso2.get('domicilio').setValidators(Validators.required);
    this.dataPaso2.get('localidad').setValidators(Validators.required);
    this.dataPaso2.get('cuit').setValidators(Validators.required);
    }
  }

// Obtengo campos del ion-change
fechaIns(event){
  this.inscripcion = new Date(event.detail.value).toLocaleDateString();
}
fechaCierre(event){
  this.cierre = new Date(event.detail.value).toLocaleDateString();
}
tipo(event){
  this.tipoSocietario = event.detail.value;
}
fechaNacimiento(event){
  this.nacimiento = new Date(event.detail.value).toLocaleDateString();
}
selCaracter(event){
  this.caracter = event.detail.value;
}

terminarP2(event){
   if (this.dataPaso2.valid && this.nacimiento !== '') {
    if(this.tipoPersona == "Persona Juridica" && 
      (this.caracter == '' || this.cierre == '' ||
      this.inscripcion == '' ||
      this.tipoSocietario == '')){
        this.presentAlert();
    }else if(this.tipoPersona == "Persona Juridica" && 
    (this.caracter != '' || this.cierre != '' ||
    this.inscripcion != '' ||
    this.tipoSocietario != '')){
    const juridica = {
    razon: this.dataPaso2.value.razon,
    societario: this.tipoSocietario,
    inscripcion: this.inscripcion,
    cierre: this.cierre,
    apellido:this.dataPaso2.value.apellido,
    nombres:this.dataPaso2.value.nombres,
    cuit:this.dataPaso2.value.cuit,
    fechaNacimiento:this.nacimiento,
    domicilio:this.dataPaso2.value.domicilio,
    localidad:this.dataPaso2.value.localidad,
    nacionalidad:this.dataPaso2.value.nacionalidad,
    caracter: this.caracter,
    };
    //mando los valores de juridica al arreglo de formularios.ts
    this.suscripcionForm2 = this.formData.mandar(juridica,1).subscribe();
    this.router.navigate(['/comerciales/3']);
    }
    const fisica = {
    dni:this.dataPaso2.value.dni,
    apellido:this.dataPaso2.value.apellido,
    nombres:this.dataPaso2.value.nombres,
    fechaNacimiento:this.nacimiento,
    nacionalidad:this.dataPaso2.value.nacionalidad,
    caracter: this.caracter,
    }
    //mando los valores de fisica al arreglo de formularios.ts
    if(this.tipoPersona !== "Persona Juridica"){
      this.suscripcionForm3 = this.formData.mandar(fisica,1).subscribe();
      this.router.navigate(['/comerciales/3']);
    }
    }else{
      this.presentAlert();
      this.dataPaso2.markAllAsTouched();
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
    this.dataPaso2 = this.fb.group({
      razon: [''],
      apellido: ['',Validators.required],
      nombres: ['',Validators.required],
      dni: [''],
      domicilio: [''],
      localidad: [''],
      nacionalidad: ['',Validators.required  ],
      cuit: ['']
    })
  }

  ngOnDestroy(){
    if(this.suscripcionForm1)
    this.suscripcionForm1.unsubscribe();
    if(this.suscripcionForm2)
    this.suscripcionForm2.unsubscribe();
    if(this.suscripcionForm3)
    this.suscripcionForm3.unsubscribe();
  }


}
