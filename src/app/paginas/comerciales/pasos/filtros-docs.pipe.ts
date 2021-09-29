import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltrosDocsPipe implements PipeTransform {

  transform(value:any , ...args: any[]): unknown {

// Argumentos 1:Local, 2:Tipo de persona, 3:Tipo de solicitud
      console.log('Desde pipe',args)
    
    const docs = value.filter(res => {
      if(args[1] === 'Persona Fisica'){
        if(args[0] === 'si'){
          const rta = res.id != 13 && res.id != 14 && res.id != 15 && res.id != 19;
          return rta;
        }else{
          const rta = res.id != 13 && res.id != 14 && res.id != 15 && res.id != 19 && res.id != 4 && res.id != 5 && res.id != 6
          return rta;
        }
      }else if(args[1] === 'Persona Juridica'){
        if(args[0] === 'si'){
          const rta = res.id != 3 && res.id != 7 && res.id != 8 && res.id != 17 && res.id != 18 
          return rta;
        }else{
          const rta = res.id != 3 && res.id != 7 && res.id != 8 && res.id != 17 && res.id != 18 && res.id != 4 && res.id != 5 && res.id != 6 
          return rta;
        }
      }
    })


    const solicitud = value.filter(res =>{
      if(
        args[2].includes('Solicitud de Inscripción') || 
        args[2].includes('Ampliación de rubro') || 
        args[2].includes('Cambio de domicilio') || 
        args[2].includes('Rehabilitación') || 
        args[2].includes('Cambio de rubro') || 
        args[2].includes('Apertura de sucursal') ){
        console.log(args[2])
        const rta = res.id != 7 && res.id != 8 && res.id != 9 && res.id != 10 && res.id != 11  && res.id != 12 && res.id != 16 && res.id != 17  
        return rta
      }else if(args[2].includes('Cambio de Responsable')){
        const rta = res.id != 9 && res.id != 10 && res.id != 11 && res.id != 12  
        return rta
      }else if(args[2].includes('Cese de Actividad')){
        const rta = res.id == 9 && res.id == 10  
        return rta
      }else if(args[2].includes('Cierre Definitivo')){
        const rta = res.id == 10 && res.id == 11  
        return rta
      }
    })


    console.log('Filtro Solicitud:',solicitud)


    return docs;
    ;

  }

}
