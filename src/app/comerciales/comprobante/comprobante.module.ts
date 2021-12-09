import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprobantePageRoutingModule } from './comprobante-routing.module';

import { ComprobantePage } from './comprobante.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprobantePageRoutingModule,
    MaterialModule
  ],
  declarations: [ComprobantePage]
})
export class ComprobantePageModule {}
