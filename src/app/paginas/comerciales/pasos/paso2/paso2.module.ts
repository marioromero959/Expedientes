import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso2PageRoutingModule } from './paso2-routing.module';

import { Paso2Page } from './paso2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paso2PageRoutingModule
  ],
  declarations: [Paso2Page]
})
export class Paso2PageModule {}
