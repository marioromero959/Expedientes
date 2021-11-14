import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadetesPageRoutingModule } from './modal-cadetes-routing.module';

import { ModalCadetesPage } from './modal-cadetes.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCadetesPageRoutingModule,
    MaterialModule,
  ],
  declarations: [ModalCadetesPage]
})
export class ModalCadetesPageModule {}
