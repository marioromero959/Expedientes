import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalActPageRoutingModule } from './modal-act-routing.module';

import { ModalActPage } from './modal-act.page';
import { MaterialModule } from 'src/app/material/material.module';
import { FiltroActividadesPipe } from '../filtros-act.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalActPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [ModalActPage,FiltroActividadesPipe]
})
export class ModalActPageModule {}
