import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-modal-cadetes',
  templateUrl: './modal-cadetes.page.html',
  styleUrls: ['./modal-cadetes.page.scss'],
})
export class ModalCadetesPage implements OnInit {

  cadetes = [
    {
      nombre:'Juan',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juanelo',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Roberto',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Maria',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Mario',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Jime',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juan',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juanelo',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Roberto',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Maria',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Jimena',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juan',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juanelo',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Roberto',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Maria',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Jimena',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juan',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Juanelo',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Roberto',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Maria',
      tel:321654987,
      descripcion:'Blablalba'
    },
    {
      nombre:'Jimena',
      tel:321654987,
      descripcion:'Blablalba'
    },
  ]

busquedaCadetes = new FormControl('');
pagina:number = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
anterior(){
  if(this.pagina > 0)
  this.pagina -= 3;
}
siguiente(){
  this.pagina += 3;
}
  
cerrarModal(){
  this.modalCtrl.dismiss();
}
}
