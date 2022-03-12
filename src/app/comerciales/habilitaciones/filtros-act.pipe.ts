import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAct'
})
export class FiltroActividadesPipe implements PipeTransform {

  transform(value: any, busqueda?:any): any {
    if(busqueda === ''){
      return value
    }else{
      const actividadesFiltradas = [];
      for(const actividad of value){
        if(actividad.actividad_nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1 || actividad.actividad_id.toString().includes(busqueda)){
          actividadesFiltradas.push(actividad)
        }
      }
      return actividadesFiltradas;
    } 
  } 

}
