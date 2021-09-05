import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso4PageRoutingModule } from './paso4-routing.module';

import { Paso4Page } from './paso4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Paso4PageRoutingModule
  ],
  declarations: [Paso4Page]
})
export class Paso4PageModule {}
