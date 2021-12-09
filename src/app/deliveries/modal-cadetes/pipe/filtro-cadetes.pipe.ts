import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCadetes'
})
export class FiltroCadetesPipe implements PipeTransform {

  transform(value: any, busqueda:any,paginacion:number = 0): any {
    if(busqueda === ''){
      return value.slice(paginacion,paginacion+3)
    }else{
      const cadetesFiltrados = [];
      for(const cadete of value){
        if(cadete.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1){
          cadetesFiltrados.push(cadete)
        }
      }
      return cadetesFiltrados.slice(paginacion,paginacion+3);
    }
    
  } 

}
