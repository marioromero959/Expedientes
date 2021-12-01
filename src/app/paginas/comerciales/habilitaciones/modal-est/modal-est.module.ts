import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEstPageRoutingModule } from './modal-est-routing.module';

import { ModalEstPage } from './modal-est.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEstPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ModalEstPage]
})
export class ModalEstPageModule {}
