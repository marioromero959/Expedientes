import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso5PageRoutingModule } from './paso5-routing.module';

import { Paso5Page } from './paso5.page';
import { CargaActPage } from '../carga-act/carga-act.page';
import { CargaActPageModule } from '../carga-act/carga-act.module';

@NgModule({
  entryComponents: [
    CargaActPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Paso5PageRoutingModule,
    CargaActPageModule,
  ],
  declarations: [Paso5Page]
})
export class Paso5PageModule {}
