import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  registroDelivery: FormGroup;
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

  constructor(
    private modalCtrl:ModalController,
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registroDelivery = this._formBuilder.group({
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
    });
  }



cerrarModal(){
  this.modalCtrl.dismiss();
}
}
