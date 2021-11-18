import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadetesPageRoutingModule } from './modal-cadetes-routing.module';

import { ModalCadetesPage } from './modal-cadetes.page';
import { MaterialModule } from 'src/app/material/material.module';
import { FiltroCadetesPipe } from './pipe/filtro-cadetes.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalCadetesPageRoutingModule,
    MaterialModule,
  ],
  declarations: [ModalCadetesPage, FiltroCadetesPipe]
})
export class ModalCadetesPageModule {}
