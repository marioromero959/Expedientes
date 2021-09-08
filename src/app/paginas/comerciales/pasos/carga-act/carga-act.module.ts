import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaActPageRoutingModule } from './carga-act-routing.module';

import { CargaActPage } from './carga-act.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CargaActPageRoutingModule
  ],
  declarations: [CargaActPage]
})
export class CargaActPageModule {}
