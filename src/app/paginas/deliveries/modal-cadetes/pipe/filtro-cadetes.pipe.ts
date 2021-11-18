import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCadetes'
})
export class FiltroCadetesPipe implements PipeTransform {

  transform(value: any, arg:any): unknown {
    const cadetesFiltrados = [];
    for(const cadete of value){
      if(cadete.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        cadetesFiltrados.push(cadete)
      }
    }
    return cadetesFiltrados;
    
  }

}
