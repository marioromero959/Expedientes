import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.page.html',
  styleUrls: ['./paso3.page.scss'],
})
export class Paso3Page implements OnInit {

  condicion:boolean = false;
  dataPaso3: FormGroup;

  constructor(    
    private router: Router,
    private fb:FormBuilder,
    private alertCtrl:AlertController,) { 
    this.miForm();    
    }

  ngOnInit() {
  }

terminarP3(event){
  if(this.dataPaso3.valid){
    const value = {
      calle: this.dataPaso3.value.calle,
      nroCalle: this.dataPaso3.value.numeroCalle,
      piso: this.dataPaso3.value.piso,
      provincia: this.dataPaso3.value.provincia,
      localidad: this.dataPaso3.value.localidad,
      codPostal: this.dataPaso3.value.codPostal,
    }
    console.log(value);
  }
  // this.router.navigate(['/comerciales/4'])
}

private miForm(){
  this.dataPaso3 = this.fb.group({
    calle: ['', [Validators.required,]],
    numeroCalle: ['', [Validators.required,]],
    piso: ['', [Validators.required,]],
    provincia: ['', [Validators.required,]],
    localidad: ['', [Validators.required,]],
    codPostal: ['', [Validators.required,]],
  })
}
}




