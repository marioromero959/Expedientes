import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
})

export class TablasComponent {

  actividades = [
    {
      tipo:'AASKDHVASMDASJKDVASJKDHVA',
      fecha:1
    },
    {
      tipo:'BDFSZDBFSKDBFSAJDKBNLKSDN',
      fecha:2
    },
    {
      tipo:'CSDFGSDGKSDBHFKSADFSADN',
      fecha:3
    },
  ]
  
  borrarAct(i){
    console.log(i)
  }
}