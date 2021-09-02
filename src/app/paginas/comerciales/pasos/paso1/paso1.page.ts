import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
  styleUrls: ['./paso1.page.scss'],
})
export class Paso1Page implements OnInit {

  dataPaso1:FormGroup;
  opcionSelec:string ='';

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.dataPaso1 = this.fb.group({
      CUIT:['hola',[Validators.required]],
      CUENTA:['',[Validators.required]],
      tipoPersona:['',[Validators.required]],
    });
    
  }
  ngOnInit() {
  }

  select(event){
    this.opcionSelec = event.detail.value;
    console.log(this.opcionSelec);
  };


  terminarP1(){
    const datos = {
      cuit: this.dataPaso1.value.CUIT,
      cuenta: this.dataPaso1.value.CUENTA,
      tipoP: this.dataPaso1.value.tipoPersona,
      local:this.opcionSelec,
    };
    console.log(datos);
    // this.router.navigate(['/comerciales/2'])
  }

}
