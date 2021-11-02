import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-habilitaciones',
  templateUrl: './habilitaciones.page.html',
  styleUrls: ['./habilitaciones.page.scss'],
})
export class HabilitacionesPage implements OnInit {

  paso1: FormGroup;
  paso2: FormGroup;
  paso3: FormGroup;
  paso4: FormGroup;
  paso5: FormGroup;
  isEditable = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paso1 = this._formBuilder.group({
      cuit: ['', Validators.required],
      cuenta: ['', Validators.required],
      tipoPersona: ['', Validators.required],
      tipoLocal: ['', Validators.required],
      solicitud: ['', Validators.required],
    });
    this.paso2 = this._formBuilder.group({
      razon: [''],
      apellido: ['',Validators.required],
      nombres: ['',Validators.required],
      dni: [''],
      domicilio: [''],
      localidad: [''],
      nacionalidad: ['',Validators.required],
      cuit: ['']
    });
    this.paso3 = this._formBuilder.group({
       // Domicilio Fiscal
    domFiscal: this._formBuilder.group({
      calle: ['', Validators.required],
      numeroCalle: ['', Validators.required],
      piso: ['', Validators.required],
      provincia: ['', Validators.required],
      localidad: ['', Validators.required],
      codPostal: ['', Validators.required],
      }),
    //Domicilio comercial
      domComercial: this._formBuilder.group({
        calleC: [''],
        numeroCalleC: [''],
        pisoC: [''],
        provinciaC: [''],
        localidadC: [''],
        codPostalC: [''],
        partida: [''],
        alquilado: [''],
        })
    });
    this.paso4 = this._formBuilder.group({
      id: ['', Validators.required],
      apellido: ['', Validators.required],
      nombres: ['', Validators.required],
    });
    this.paso5 = this._formBuilder.group({
      fantasia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

enviarP1(){
  console.log('Fin p1')
}
enviarP2(){
  console.log('Fin p2')
}
enviarP3(){
  console.log('Fin p3')
}
enviarP4(){
  console.log('Fin p4')
}
enviarP5(){
  console.log('Fin p5')
}

}