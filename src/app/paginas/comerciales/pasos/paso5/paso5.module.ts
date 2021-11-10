import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso5PageRoutingModule } from './paso5-routing.module';

import { Paso5Page } from './paso5.page';
import { CargaActPage } from '../../habilitaciones/carga-act/carga-act.page';
import { CargaActPageModule } from '../../habilitaciones/carga-act/carga-act.module';
import { CargaEstudioPage } from '../../habilitaciones/carga-estudio/carga-estudio.page';
import { CargaEstudioPageModule } from '../../habilitaciones/carga-estudio/carga-estudio.module';

@NgModule({
  entryComponents: [
    CargaActPage,
    CargaEstudioPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Paso5PageRoutingModule,
    CargaActPageModule,
    CargaEstudioPageModule,
  ],
  declarations: [Paso5Page]
})
export class Paso5PageModule {}
