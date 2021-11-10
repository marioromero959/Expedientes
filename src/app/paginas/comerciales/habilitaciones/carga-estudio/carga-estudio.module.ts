import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaEstudioPageRoutingModule } from './carga-estudio-routing.module';

import { CargaEstudioPage } from './carga-estudio.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CargaEstudioPageRoutingModule,
    MaterialModule
  ],
  declarations: [CargaEstudioPage]
})
export class CargaEstudioPageModule {}
