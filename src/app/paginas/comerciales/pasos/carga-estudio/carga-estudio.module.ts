import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaEstudioPageRoutingModule } from './carga-estudio-routing.module';

import { CargaEstudioPage } from './carga-estudio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CargaEstudioPageRoutingModule
  ],
  declarations: [CargaEstudioPage]
})
export class CargaEstudioPageModule {}
