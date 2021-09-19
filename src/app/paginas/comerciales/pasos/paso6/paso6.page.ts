import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';

@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.page.html',
  styleUrls: ['./paso6.page.scss'],
})
export class Paso6Page implements OnInit {
  
  public archivos:any = [];
  dataPaso6: FormGroup;
  
  nombresDoc = [
    {name: 'Constancia de inscripción con sist registral',},
    {name: 'Constancia de inscripción en ATER'},
    {name: 'Constancia de sellado'},
    {name: 'Contrato de alquiler/comodato, en caso de corresponder'},
    {name: 'Copia de impuesto inmobiliario o tasa inmobiliaria donde conste numero de partida del inmueble'},
    {name: 'DNI del titular - Dorso'},
    {name: 'DNI del titular - Frente'},
    {name: 'Plano/Croquis del lugar donde se desarrollará la actividad (Opcional)'},
  ];

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private formData:FormulariosService,
    private alertCtrl:AlertController,) { 
      this.miForm();
    }
  ngOnInit() {
  }


select(event){
  var reader = new FileReader();
  const self = this.archivos;
  const archivoCapturado = event.target.files[0];
  if(archivoCapturado){
    reader.readAsDataURL(archivoCapturado); 
    reader.onloadend = function() {
        var base64data = reader.result;
        self.push(base64data);
      };
  }else{
    console.log('err')
  }
}

terminarP6(){
/*   this.dataPaso6.value.registral = this.archivos[0];
  this.dataPaso6.value.ater = this.archivos[1];
  this.dataPaso6.value.sellado = this.archivos[2];
  this.dataPaso6.value.alquiler = this.archivos[3];
  this.dataPaso6.value.impuesto = this.archivos[4];
  this.dataPaso6.value.DNIdorso = this.archivos[5];
  this.dataPaso6.value.DNIfrente = this.archivos[6];
  this.dataPaso6.value.planos = this.archivos[7];
  if(this.archivos == ''){
    console.log('no se puede ir')
  }else{ */
    console.log('Registral',this.dataPaso6.value.registral);
    // this.router.navigate(['/comerciales']);
  // }

  // console.log(this.dataPaso6.value.archivo);
};

private miForm(){
  this.dataPaso6 = this.fb.group({
  registral: ['',Validators.required],
  ater: ['',Validators.required],
  sellado: ['',Validators.required],
  alquiler: ['',Validators.required],
  impuesto: ['',Validators.required],
  DNIdorso: ['',Validators.required],
  DNIfrente: ['',Validators.required],
  planos: ['',Validators.required],
  })
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incompletos',
    subHeader: 'Por favor, complete todos los campos para continuar.',
    buttons: ['OK']
  });
await alert.present();
};

}
