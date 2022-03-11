import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatosService } from 'src/app/servicios/datos/datos.service';
import { EditarExpedientesService } from 'src/app/servicios/editar-exp/editar-expedientes.service';
import { Paso1, Paso2Fisica, Paso3, Paso4, Paso5 } from 'src/app/shared/interface/interfaz-habilitaciones';
import { HabilitacionesPage } from '../crear-habilitaciones/habilitaciones.page';


@Component({
  selector: 'app-editar-habilitaciones',
  templateUrl: './../crear-habilitaciones/habilitaciones.page.html',
  styleUrls: ['./../crear-habilitaciones/habilitaciones.page.scss'],
})
export class EditarHabilitacionesPage extends HabilitacionesPage implements OnInit {

constructor(
  _formBuilder: FormBuilder,
  datos: DatosService,
  editar: EditarExpedientesService,
  alerta: AlertController,
  modalCtrl:ModalController,
  router: Router,
  private route: ActivatedRoute,
  ) { 
    super(_formBuilder,datos,editar,alerta,modalCtrl,router)
  }

  ngOnInit() {
    super.ngOnInit();
    let id = this.route.snapshot.paramMap.get('id')
    console.log('editt',id);
    // this.cargarExp()
  }

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
  
}
