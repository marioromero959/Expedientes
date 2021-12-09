import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltrosDocsPipe implements PipeTransform {

  transform(value:any , ...args: any[]) {

// Args[] 
// 0:Local, 1:Tipo de persona, 2:Tipo de solicitud

// Filtro primero por local y tipo de persona
    const docs = value.filter(res => {
      if(args[1] === 1){
        if(args[0] === '1'){
          const rta = res.id != 13 && res.id != 14 && res.id != 15 && res.id != 19;
          return rta;
        }else{
          const rta = res.id != 13 && res.id != 14 && res.id != 15 && res.id != 19 && res.id != 4 && res.id != 5 && res.id != 6
          return rta;
        }
      }else if(args[1] === 2){
        if(args[0] === '1'){
          const rta = res.id != 3 && res.id != 7 && res.id != 8 && res.id != 17 && res.id != 18 
          return rta;
        }else{
          const rta = res.id != 3 && res.id != 7 && res.id != 8 && res.id != 17 && res.id != 18 && res.id != 4 && res.id != 5 && res.id != 6 
          return rta;
        }
      }
    })
// Filtro docs por tipo de solicitud
    const solicitud = docs.filter(res =>{
      if(
        args[2].includes(1) || 
        args[2].includes(2) || 
        args[2].includes(3) || 
        args[2].includes(5) || 
        args[2].includes(7) || 
        args[2].includes(10) ){
        const rta = res.id != 7 && res.id != 8 && res.id != 9 && res.id != 10 && res.id != 11  && res.id != 12 && res.id != 16 && res.id != 17
        if(args[2].includes(8)){
          const rta2 = res.id != 7 && res.id != 8 && res.id != 9 && res.id != 10 && res.id != 11  && res.id != 12 && res.id != 16 && res.id != 17
          return rta2
        }
        if(args[2].includes(4)){
          const rta3 = res.id != 7 && res.id != 8 && res.id != 11  && res.id != 12 && res.id != 16 && res.id != 17
          return rta3
        }  
        return rta
      }else if(args[2].includes(8)){
        const rta = res.id != 9 && res.id != 10 && res.id != 11 && res.id != 12  
        return rta
      }else if(args[2].includes(4)){
        const rta = res.id != 1  && res.id != 2 && res.id != 3 && res.id != 4 && res.id != 5 && res.id != 6 && res.id != 7 && res.id != 8 && res.id != 11 && res.id != 12 && res.id != 13 && res.id != 14 && res.id != 15 && res.id != 16  && res.id != 17 && res.id != 18 && res.id != 19   
        return rta
      }else if(args[2].includes(9)){
        const rta = res.id != 1  && res.id != 2 && res.id != 3 && res.id != 4 && res.id != 5 && res.id != 6 && res.id != 7 && res.id != 8 && res.id != 9 && res.id != 10 && res.id != 13 && res.id != 14 && res.id != 15 && res.id != 16  && res.id != 17 && res.id != 18 && res.id != 19   
        return rta
      }else{
        console.log('Error')
      }
    })
    return solicitud;
    ;
  }

}
