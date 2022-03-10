import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DatosService } from 'src/app/servicios/datos/datos.service';
import { EditarExpedientesService } from 'src/app/servicios/editar-exp/editar-expedientes.service';
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
  ) { 
    super(_formBuilder,datos,editar,alerta,modalCtrl,router)
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('editt');
    this.loading = false
    
  }

}
