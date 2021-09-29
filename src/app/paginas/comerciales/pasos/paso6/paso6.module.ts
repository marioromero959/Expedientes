import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso6PageRoutingModule } from './paso6-routing.module';

import { Paso6Page } from './paso6.page';
import { FiltrosDocsPipe } from '../filtros-docs.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Paso6PageRoutingModule
  ],
  declarations: [Paso6Page,FiltrosDocsPipe]
})
export class Paso6PageModule {}
