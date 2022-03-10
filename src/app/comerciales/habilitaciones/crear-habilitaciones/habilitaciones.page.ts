import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalActPage } from '../modal-act/modal-act.page';
import { ModalEstPage } from '../modal-est/modal-est.page';
import { DatosService } from 'src/app/servicios/datos/datos.service';
import { EditarExpedientesService } from 'src/app/servicios/editar-exp/editar-expedientes.service';
import { Paso1, Paso2Fisica, Paso3, Paso4, Paso5 } from 'src/app/shared/interface/interfaz-habilitaciones';

@Component({
  selector: 'app-habilitaciones',
  templateUrl: './habilitaciones.page.html',
  styleUrls: ['./habilitaciones.page.scss'],
})

export class HabilitacionesPage implements OnInit {

  loading:any;
  // Formularios
  paso1: FormGroup;paso2: FormGroup;paso3: FormGroup;paso4: FormGroup;paso5: FormGroup;paso6;
  isEditable = true;
  estudioOk = false;
// Variables para almacenar datos del backend 
  arrPersonas:any;
  arrSolicitudes:any;
  arrPaises:any;
  arrProvincias:any;
// Variables y condiciones
  id:number;
  condicionP1Solicitud:boolean = false;
  condicionP2TipoPersona:string = '';
  condicionP3Local:boolean = true;
  condicionP4Alquiler:boolean = false;
// Variables P5
  actividades = []
  estudio = []
// Variables P6
  datosP;
  paso:number;
  archivos:any = [];
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
    name: 'Constancia de baja de actividad en AFIP con sistema registral',
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
  filtroLocal:number;
  filtroPersona:number;
  filtroSolic = [];
//validacion campo persona fisic y juridica

  constructor(
    private _formBuilder: FormBuilder,
    private datos: DatosService,
    private editar: EditarExpedientesService,
    private alerta: AlertController,
    private modalCtrl:ModalController,
    private router: Router,
    ) {}

  ngOnInit() {
    // Construccion formularios
    this.paso1 = this._formBuilder.group({
      cuit: ['', Validators.required],
      cuenta: [{value:'', disabled:false}, Validators.required],
      tipoPersona: ['', Validators.required],
      tipoLocal: ['', Validators.required],
      solicitud: ['', Validators.required],
    });
    this.paso2 = this._formBuilder.group({
      razon: [''],
      fechaInscripcion: [''],
      tipoSocietario: [''],
      cierre: [''],
      apellido: ['', Validators.required],
      nombres: ['', Validators.required],
      dni: [''],
      fechaNacimiento: ['', Validators.required],
      domicilio: [''],
      localidad: [''],
      nacionalidad: ['', Validators.required],
      cuit: [''],
      caracter: ['', Validators.required],
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
        select: [''],
        calleC: ['', Validators.required],
        numeroCalleC: ['', Validators.required],
        pisoC: ['', Validators.required],
        provinciaC: ['', Validators.required],
        localidadC: ['', Validators.required],
        codPostalC: ['', Validators.required],
        partida: ['', Validators.required],
        alquilado: ['', Validators.required],
        })
    });
    this.paso4 = this._formBuilder.group({
      cuit: ['', Validators.required],
      apellido: ['', Validators.required],
      nombres: ['', Validators.required],
    });
    this.paso5 = this._formBuilder.group({
      fantasia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      actividad: ['', Validators.required],
      estudio: ['']
    });
    this.paso6 = this._formBuilder.group({
    documentos: ['',Validators.required]  
    })
// Traer data del back
    this.datos.obtenerPersonas().subscribe(res=>{
      this.arrPersonas = res;
    })
    this.datos.obtenerSolicitudes().subscribe(res=>{
      this.arrSolicitudes = res;
    })
    this.datos.obtenerNacionalidades().subscribe(res=>{
      this.arrPaises = res;
    })
    this.datos.obtenerProvincias({provincia_id:'12'}).subscribe(res=>{
      console.log(res)
    })//ver

// Traer data del usuario cargada en memoria
    const userData = JSON.parse(localStorage.getItem('Usuario'));
    this.id = userData.usuario_id;
    const exp = JSON.parse(localStorage.getItem('Datos Expedientes'));
    if(exp) this.cargarExp(exp);
  }
// PASO 1 ----------------
  get solicitudField(){return this.paso1.get('solicitud');}

  solicitud(event){
// Desabilito el input de Nro de cuenta y vacio el array de tipos 
    if((event.includes(1) || event.includes(9)) &&  event.length > 1){
      this.condicionP1Solicitud = true;
    }else if(event.includes(1) && event.length == 1){
      this.paso1.get('cuenta').patchValue('');
      this.paso1.controls['cuenta'].disable();
      this.condicionP1Solicitud = false;
    }else{
      this.paso1.controls['cuenta'].enable();
      this.condicionP1Solicitud = false;
    }
  };

  enviarP1(){
    const { cuit, cuenta, tipoPersona, tipoLocal, solicitud} = this.paso1.value;
    if(this.paso1.invalid){
      this.presentAlert();
    }else{
    // Armamos el objeto para enviar al backend
      const value = {
        id:this.id,
        cuit: Number(cuit),
        cuenta:Number(cuenta),
        tipoPersona,
        local:Number(tipoLocal),
        solicitud
      };
// this.datos.enviarP1(value).subscribe(res=>console.log(res));
    }
// Modificamos el paso 2
    if(this.paso1.value.tipoPersona == 1){
      this.condicionP2TipoPersona = "Persona Fisica"
      this.paso2.get('caracter').patchValue('Titular');
      this.paso2.controls['caracter'].disable();
    }else if(this.paso1.value.tipoPersona == 2){
      this.condicionP2TipoPersona = "Persona Juridica"
      this.paso2.get('caracter').patchValue('');
      this.paso2.controls['caracter'].enable();
    }
  }

// PASO 2 ---------------
  enviarP2(){
    const { apellido, nombres, dni, fechaNacimiento, nacionalidad, razon, fechaInscripcion,  tipoSocietario, cierre, domicilio, localidad, cuit, caracter } = this.paso2.value;
    if(this.paso2.invalid){
      this.presentAlert();
    }else{
      if(this.paso1.value.tipoPersona == 1){
        const value = {
        apellido,
        nombres,
        dni,
        fechaNacimiento,
        nacionalidad,
        caracter: 'Titular',
        };
      // Enviar al back los value
      }else if(this.paso1.value.tipoPersona == 2){
      const value = {
        razon,
        fechaInscripcion,
        tipoSocietario,
        cierre,
        apellido,
        nombres,
        fechaNacimiento,
        domicilio,
        localidad,
        nacionalidad,
        cuit,
        caracter,
      }
      }
    }
// Modificamos el paso 3
    if(this.paso1.value.tipoLocal === '1'){
// Si tiene local añadimos el control de domComercial
      this.condicionP3Local = true;
      this.paso3.addControl('domComercial',this._formBuilder.group({
        select: [''],
        calleC: ['', Validators.required],
        numeroCalleC: ['', Validators.required],
        pisoC: ['', Validators.required],
        provinciaC: ['', Validators.required],
        localidadC: ['', Validators.required],
        codPostalC: ['', Validators.required],
        partida: ['', Validators.required],
        alquilado: ['', Validators.required],
      }));
    }else{
// Si no tiene quitamos el control de domComercial
      this.condicionP3Local = false;
      this.paso3.removeControl('domComercial');
    }
  }

// PASO 3 -------------
  domicilio(event){
  if(event === 'si'){

    this.paso3.get(['domComercial','calleC']).patchValue(this.paso3.value.domFiscal.calle);
      this.paso3.get(['domComercial','numeroCalleC']).patchValue(this.paso3.value.domFiscal.numeroCalle);
      this.paso3.get(['domComercial','pisoC']).patchValue(this.paso3.value.domFiscal.piso);
      this.paso3.get(['domComercial','provinciaC']).patchValue(this.paso3.value.domFiscal.provincia);
      this.paso3.get(['domComercial','localidadC']).patchValue(this.paso3.value.domFiscal.localidad);
      this.paso3.get(['domComercial','codPostalC']).patchValue(this.paso3.value.domFiscal.codPostal); 
    }else if(event === 'no'){
      this.paso3.get('domComercial').patchValue('');//ver
      // this.paso3.get(['domComercial','calleC']).patchValue('');
      // this.paso3.get(['domComercial','numeroCalleC']).patchValue('');
      // this.paso3.get(['domComercial','pisoC']).patchValue('');
      // this.paso3.get(['domComercial','provinciaC']).patchValue('');
      // this.paso3.get(['domComercial','localidadC']).patchValue('');
      // this.paso3.get(['domComercial','codPostalC']).patchValue('');
    }
  }

// Determinamos si es alquilado o no para mostrar el paso 4
  alquilado(event){
    if(event === '1'){
      this.condicionP4Alquiler = true;
    }else{
      this.condicionP4Alquiler = false;
    }
  }//ver

  enviarP3(){
    if(this.paso3.invalid){
      this.presentAlert();
    }
  }

// PASO 4 -------------
  enviarP4(){
    if(this.paso4.invalid){
      this.presentAlert();
    }
  }

// PASO 5 -------------
  borrarAct(id){
    this.actividades.splice(id,1)
    if(this.actividades.length == 0){
      this.paso5.get('actividad').patchValue('');
    }
  }

  borrarEstudio(){
    this.estudio.splice(0,1)
    this.estudioOk = false;
  }

  async agregarAct(){
    const modal = await this.modalCtrl.create(
      {
        component: ModalActPage,
        componentProps:{
          tipo: '',
          fecha: '',
        },
        cssClass: 'my-custom-class'
      }
    )
    await modal.present();
    const { data } = await modal.onDidDismiss();
        if(data === undefined){
          console.log('Cancelado');
        }else{
          this.actividades.push(data);
          this.paso5.get('actividad').patchValue(this.actividades);
        }
  }

  async  agregarEstudio(){
      const modal = await this.modalCtrl.create(
        {
          component: ModalEstPage,
          componentProps:{
            estudio: '',
            telefono: '',
            email: '',
          },
          cssClass: 'my-custom-class'
        }
      )
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if(data === undefined){
        console.log('Cancelado');
      }else{
        this.estudio.push(data);
        this.paso5.get('estudio').patchValue(this.estudio);
        this.estudioOk = true;
      }
  }

  enviarP5(){
    if(this.paso5.invalid || this.actividades.length == 0){
      this.presentAlert();
    }else{
      // Enviamos filtros P6
      this.filtroLocal = this.paso1.value.tipoLocal;
      this.filtroPersona = this.paso1.value.tipoPersona;
      this.filtroSolic = this.paso1.value.solicitud;
    }
  }

// PASO 6 ------------
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

  enviarP6(){
    let filtrado = this.archivos.filter((res)=>{
      return res   
    })
    if(this.archivos.length != filtrado.length || this.archivos.length == 0){
      this.presentAlert();
    }else{
    this.paso6.get('documentos').patchValue('ok');
  /*     this.archivos.forEach(res => {
        // Ver tamaño de archivos en b64
        const archivos = JSON.stringify(res)
        this.formData.envioArchivos(archivos).subscribe();
      }); */
      this.presentAlert2();
      console.log(this.archivos)
    }
  };

// alertas
  async presentAlert() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incompletos',
      subHeader: 'Por favor, complete todos los campos para continuar.',
      buttons: ['OK']
    });

  await alert.present();
  };

  async presentAlert2() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: '¿Enviar solicitud?',
      subHeader: '¿Desea terminar esta habilitación comercial?',
      buttons: [{
        text:'Finalizar',
        handler: () =>{
          this.router.navigate(['/comerciales/comprobante'])
        }
      }]
    });
  await alert.present();
  };

// Si existe el expediente, entonces preparamos para edicion
cargarExp(exp){
  const { hcexp_id } = exp;
  const id = {"hcexpid": hcexp_id}
//Obtener datos a cargar
this.editar.obtenerPaso1(id).subscribe(res=>{
      const datap1:Paso1 = res;
      const {cuit,personatipo, tienelocal,tsolicitudes} = datap1;
      const datos = {
        cuit,
        cuenta:123,
        tipoPersona:personatipo,
        tipoLocal:String(tienelocal),
        solicitud:[5]
      }
      this.paso1.patchValue(datos);
})

 this.editar.obtenerPaso2PersonaFisica(id).subscribe(res=>{
      const datap2Fisica:Paso2Fisica =  res;
      const { persfisicaap,persfisicanom,persfiscandoc, persfisicafecnac,persfisicaestado } = datap2Fisica;
      const datos = {
        razon:'',
        fechaInscripcion:'',
        tipoSocietario:'',
        cierre:'',
        apellido:persfisicaap,
        nombres:persfisicanom,
        dni:persfiscandoc,
        fechaNacimiento:persfisicafecnac,
        domicilio:'',
        localidad:'',
        nacionalidad:persfisicaestado,
        cuit:'',
        caracter:'',
      }
  this.paso2.patchValue(datos);
})

this.editar.obtenerPaso3(id).subscribe(res=>{
  let datap3:Paso3[] =  res;
  const {hc_domicilio_calle,
        hc_domicilio_nro,
        hc_domicilio_piso,
        hc_domicilio_propietario,
        hc_domicilio_codpostal,
        hc_domicilio_estado,
        hc_domicilio_id,
        hc_domicilio_partida_provincial,
        hc_domicilio_tipo_id} = datap3[0];
  const {} = datap3[1];
  const datosA = {
    calle:hc_domicilio_calle,
    numeroCalle:hc_domicilio_nro,
    piso:hc_domicilio_piso,
    provincia:'Cordoba',
    localidad:'Cordoba',
    codPostal:hc_domicilio_codpostal
  }
  const datosB = {
    select:'si',
    calleC:'Balcarce',
    numeroCalleC:136,
    pisoC:7,
    provinciaC:'Cordoba',
    localidadC:'Cordoba',
    codPostalC:hc_domicilio_codpostal,
    partida:hc_domicilio_partida_provincial,
    alquilado:'1',
  };
  this.paso3.get('domFiscal').patchValue(datosA);
  if(this.paso1.value.tipoLocal === '1'){
    this.paso3.get('domComercial').patchValue(datosB);
    this.domicilio("si")
  }
})
  // Verificar funcion domicilio para redireccionar

this.editar.obtenerPaso4(id).subscribe(res=>{
  const datap4:Paso4 =  res;
  const { hc_dp_cuit_cuil_dni, hc_dp_apellido, hc_dp_nombres} = datap4;
  const datos = {
    cuit:hc_dp_cuit_cuil_dni,
    apellido:hc_dp_apellido,
    nombres:hc_dp_nombres
  }
  this.paso4.patchValue(datos);
})

this.editar.obtenerPaso5(id).subscribe(res=>{
  let datap5:Paso5 =  res;
  const { hc_otro_dato_nombre_fantasia, hc_otro_dato_telefono, hc_otro_dato_email} = datap5;
  const datos = {
    fantasia:hc_otro_dato_nombre_fantasia,
    telefono:hc_otro_dato_telefono,
    email:hc_otro_dato_email,
    estudio:[''],
    actividades:[''],
  }
  // const actividades: fecha y tipo
  const estudio = 
    {
      estudio:'Mario Web',
      telefono:123456,
      email:'marioromero959@gmail.com'
  }
  if(estudio != null){
    this.paso5.patchValue(datos)
    this.estudio.push(estudio)
    this.paso5.get('estudio').patchValue(this.estudio);
    this.estudioOk = true;
  }
  const arrAct = [
    {
      fecha:'2021-12-20',
      tipo:'Actividad 1'
    },
    {
      fecha:'2021-12-20',
      tipo:'Actividad 1'
    }
  ]
  arrAct.forEach(act=>{
    this.actividades.push(act)
  })
  this.paso5.get('actividad').patchValue(this.actividades);

}) 

}

// Al salir del componente borramos los datos del expediente
ionViewDidLeave(){
  localStorage.removeItem('Datos Expedientes');
}

}