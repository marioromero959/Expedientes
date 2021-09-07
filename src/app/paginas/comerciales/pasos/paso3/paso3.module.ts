import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso3PageRoutingModule } from './paso3-routing.module';

import { Paso3Page } from './paso3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Paso3PageRoutingModule
  ],
  declarations: [Paso3Page]
})
export class Paso3PageModule {}
