import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FormulariosService } from 'src/app/servicios/datos/data-pasos/formularios.service';
import { FiltrosDocsPipe } from '../filtros-docs.pipe';
@Component({
  selector: 'app-paso6',
  templateUrl: './paso6.page.html',
  styleUrls: ['./paso6.page.scss'],
  providers: [FiltrosDocsPipe]
})
export class Paso6Page implements OnInit, OnDestroy {

  filtroData;
  datosP;
  paso:number;
  archivos:any = [];
  dataPaso6: FormGroup;
  claseInput:boolean = false;  
  documentos = [
    {id:1,
    name: 'Constancia de inscripción con sist registral',
    sName:'registral'},
    {id:2,
    name: 'Constancia de inscripción en ATER',
    sName:'ater'},
    {id:3,
    name: 'DNI del titular - Frente',
    sName:'DNIfrente'},
    {id:4,
    name: 'Contrato de alquiler/comodato, en caso de corresponder',
    sName:'alquiler'},
    {id:5,
    name: 'Copia de impuesto inmobiliario o tasa inmobiliaria donde conste numero de partida del inmueble',
    sName:'impuesto'},
    {id:6,
    name: 'Plano/Croquis del lugar donde se desarrollará la actividad (Opcional)',
    sName:'planos'},
    {id:7,
    name: 'DNI nuevo titular - Frente',
    sName:'nuevoDNIfrente'},
    {id:8,
    name: 'Constancia de baja anterior',
    sName:'baja'},
    // Ver esta constancia
    {id:9,
    name: 'Constancia de baja de actividad en AFIP con sistema ASDASDA',
    sName:'bajaAFIP'},
    {id:10,
    name: 'Constancia de baja de actividad en ATER',
    sName:'bajaActATER'},
    {id:11,
    name: 'Constancia de baja en AFIP con sistema registral',
    sName:'bajaRegistralAFIP'},
    {id:12,
    name: 'Constancia de baja en ATER',
    sName:'bajaAter'},
    {id:13,
    name: 'DNI del Presidente o Socio representante - Frente',
    sName:'DNIPresidenteFrente'},
    {id:14,
    name: 'Última acta de designación de autoridades',
    sName:'acta'},
    {id:15,
    name: 'Estatuto o contrato constitutivo',
    sName:'estatuto'},
    {id:16,
    name: 'Constancia de sellado',
    sName:'sellado'},
    {id:17,
    name: 'DNI nuevo titular - Dorso',
    sName:'nuevoDNIdorso'},
    {id:18,
    name: 'DNI del titular - Dorso',
    sName:'DNIdorso'},
    {id:19,
    name: 'DNI del Presidente o Socio representante - Dorso',
    sName:'DNIPresidenteDorso'},
  ];
  // filtrado de documentos
  filtroLocal = '';
  filtroPersona = '';
  filtroSolic = [];

  private suscripcionForm1: Subscription;

  constructor(
    private router:Router,
    private filtroPipe:FiltrosDocsPipe,
    private fb:FormBuilder,
    private formData:FormulariosService,
    private alertCtrl:AlertController,) {
      // Segun la informacion del paso 3 mostraremos como paso 5 o 6
      this.suscripcionForm1 =  this.formData.escucharData().subscribe(res=>{
        this.datosP = res;

        this.filtroLocal = this.datosP[0].local;
        this.filtroPersona = this.datosP[0].tipo;
        this.filtroSolic = this.datosP[0].solicitud;

        if(this.datosP[0].local == 'no'){
          this.paso = 5
        }else{
          const local = this.datosP[2].domComercial.alquilado;
          (local == 'Alquiler') ? this.paso = 6 : this.paso = 5;
        }
      })
      this.miForm(); 
    }
  ngOnInit() {
  }

  // Agrego las imagenes en base64 al arr de archivos
select(event,index,count){
  // count es el length del array a llenar
  var reader = new FileReader();
  this.archivos.length = count;
  const self = this.archivos;

  const archivoCapturado = event.target.files[0];
  if(archivoCapturado){
    reader.readAsDataURL(archivoCapturado); 
    reader.onloadend = function() {
        var base64data = reader.result;
        if(self[index] == '' || self[index] != ''){
          self.splice(index,1,base64data);
        }
      };
  }else{
    self.splice(index,1,null)
  }
}

terminarP6(){
  console.log('Imprimo archivos:',this.archivos)
  let filtrado = this.archivos.filter((res)=>{
    return res   
  })

  if(this.archivos.length != filtrado.length){
    this.presentAlert();
  }else{
    // Navegacion
    console.log('Archivos completos');
  }


 if(this.dataPaso6.invalid){
  this.presentAlert();
}else{
  console.log('tamoready');
}
};

private miForm(){
  this.dataPaso6 = this.fb.group({
  registral: ['',Validators.required],
  ater: ['',Validators.required],
  DNIfrente: ['',Validators.required],
  alquiler: ['',Validators.required],
  impuesto: ['',Validators.required],
  planos: ['',Validators.required],
  nuevoDNIfrente: ['',Validators.required],
  baja: ['',Validators.required],
  bajaAFIP: ['',Validators.required],
  bajaActATER: ['',Validators.required],
  bajaRegistralAFIP: ['',Validators.required],
  bajaAter: ['',Validators.required],
  DNIPresidenteFrente: ['',Validators.required],
  acta: ['',Validators.required],
  estatuto: ['',Validators.required],
  sellado: ['',Validators.required],
  nuevoDNIdorso: ['',Validators.required],
  DNIdorso: ['',Validators.required],
  DNIPresidenteDorso: ['',Validators.required],
  })
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Datos Incompletos',
    subHeader: 'Por favor, agregue todos los archivos para continuar.',
    buttons: ['OK']
  });
await alert.present();
};

ngOnDestroy(){
  if(this.suscripcionForm1)
  this.suscripcionForm1.unsubscribe();
}

}
