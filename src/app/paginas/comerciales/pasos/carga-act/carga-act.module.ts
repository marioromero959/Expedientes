import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaActPageRoutingModule } from './carga-act-routing.module';

import { CargaActPage } from './carga-act.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CargaActPageRoutingModule,
    MaterialModule
  ],
  declarations: [CargaActPage]
})
export class CargaActPageModule {}
