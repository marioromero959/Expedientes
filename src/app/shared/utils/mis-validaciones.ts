import {AbstractControl} from '@angular/forms'

export class MisValidaciones {

    static currentUser(existe:any){
     return (control:AbstractControl) =>{
        const value = control.value;
            for(let i = 0; i<existe.length;i++){
                if(value == existe[i]){
                return {currentUser:true};
                }
            }
     return null;
     }
    }

    static currentEmail(existe:any){
        return (control:AbstractControl) =>{
           const value = control.value;
               for(let i = 0; i<existe.length;i++){
                   if(value == existe[i]){
                   return {currentUser:true};
                   }
               }
        return null;
        }
       }


}

