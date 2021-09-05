import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtencionPageRoutingModule } from './atencion-routing.module';

import { AtencionPage } from './atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AtencionPageRoutingModule
  ],
  declarations: [AtencionPage]
})
export class AtencionPageModule {}
