import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() seleccion;

  registroNegocio: FormGroup;
  registroCadete: FormGroup;
  actividades:any[] = [
    'Alimentos',
    'Bebidas',
    'Cadeterías',
    'Calzado e Indumentaria',
    'Carnicerías',
    'Corralones',
    'Emprendedores',
    'Farmacias',
    'Ferreterías',
    'Fruterías y Verdulerías',
    'Gastronómicos',
    'Heladerías',
    'Informática',
    'Kioscos',
    'Librerías',
    'Panaderías',
    'Pinturerías',
    'Pollerías',
    'Remises',
    'Rotiserías',
    'Varios'
  ];
  productos:any[]= [
    'Alimentos',
    'Bebidas',
    'Cadeterías',
    'Carnicerías',
    'Corralones',
    'Farmacias',
    'Ferreterías',
    'Fruterías y Verdulerías',
    'Gastronómicos',
    'Heladerías',
    'Informática',
    'Kioscos',
    'Librerías',
    'Limpieza',
    'Panaderías',
    'Pinturerías',
    'Pollerías',
    'Remises',
    'Rotiserías',
    'Varios'
  ];
  mostrar = false;

  constructor(
    private modalCtrl:ModalController,
    private alertCtrl: AlertController,
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registroNegocio = this._formBuilder.group({
      cuit: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      whatsapp: [''],
      email: [''],
      direccion: ['', Validators.required],
      actividad: ['', Validators.required],
      productos: ['', Validators.required],
      realizaD: ['', Validators.required],
      condicionD: ['', Validators.required],
      horario: ['', Validators.required],
      pago: [''],
      acuerdo: ['',Validators.required],
    });
    this.registroCadete = this._formBuilder.group({
      datosPersonales: this._formBuilder.group({
        apellido: ['', Validators.required],
        nombres: ['', Validators.required],
        dni: ['', Validators.required],
        cuit: ['', Validators.required],
        nacimiento: ['', Validators.required],
        domicilio: ['', Validators.required],
        telefonoP: [''],
        telefonoL: ['', Validators.required],
        email: [''],
        }),
      datosVehiculo: this._formBuilder.group({
        tipo1: ['', Validators.required],
        tipo2: ['', Validators.required],
        dominio1: ['', Validators.required],
        dominio2: ['', Validators.required],
        aseguradora1: ['', Validators.required],
        aseguradora2: ['', Validators.required],
        poliza1: ['', Validators.required],
        poliza2: ['', Validators.required],
        }),
      bienes: ['',Validators.required]
    })
  }

registrarNegocio(){
  if(this.registroNegocio.valid){
    console.log(this.registroNegocio.value)
  }else{
    this.presentAlert();
  }
}
registrarCadete(){
  if(this.registroCadete.valid){
    console.log(this.registroCadete.value)
  }else{
    this.presentAlert();
  }
}
cerrarModal(){
  this.modalCtrl.dismiss();
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incompletos',
    subHeader: 'Por favor, complete todos los campos con * para continuar.',
    buttons: ['OK']
  });

await alert.present();
};

}
