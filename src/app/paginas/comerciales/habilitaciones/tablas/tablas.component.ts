import { Component,ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TablasComponent {

  @ViewChild(MatTable) table: MatTable<any>;
  datos = actividad;
  dataSource = [...actividad];
  columnasMostrar = ['fecha', 'description', 'position'];

  expandirDatos:datosAct | null;

  borrarAct(){
  console.log('borrao')
  this.dataSource.pop();
  this.table.renderRows();
  }

}

export interface datosAct {
  position: string;
  fecha: number;
  description: string;
}


const actividad:any[]=[
  {
    position: 'Detalles',
    fecha:1,
    description:'blabla1',
  },
  {
    position: 'Aaaa',
    fecha:2,
    description:'blabla2',
  }
]
