import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
  styleUrls: ['./paso2.page.scss'],
})
export class Paso2Page implements OnInit {

  dataPaso2: FormGroup;
  tipoSocietario:string = '';
  inscripcion:Date;
  cierre:Date;
  nacimiento:Date;
  caracter:string = '';

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,
  ) { 
    this.miForm();
  }

  ngOnInit() {}

fechaIns(event){
  this.inscripcion = new Date(event.detail.value);
}
fechaCierre(event){
  this.cierre = new Date(event.detail.value);
}
tipo(event){
  this.tipoSocietario = event.detail.value;
}
fechaNacimiento(event){
  this.nacimiento = new Date(event.detail.value);
}
selCaracter(event){
  this.caracter = event.detail.value;
}

terminarP2(event){
  if (this.dataPaso2.valid) {
    const value = {
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
    if(value.razon == '' || value.societario == '' || value.inscripcion == undefined || value.cierre == undefined || value.fechaNacimiento == undefined || value.caracter == ""
      ){
      this.presentAlert();
    }else{
      this.router.navigate(['/comerciales/3']);
      };
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
      razon: ['', [Validators.required,]],
      apellido: ['', [Validators.required,]],
      nombres: ['', [Validators.required,]],
      cuit: ['', [Validators.required,]],
      domicilio: ['', [Validators.required,]],
      localidad: ['', [Validators.required,]],
      nacionalidad: ['', [Validators.required,]],
    })
  }

}
