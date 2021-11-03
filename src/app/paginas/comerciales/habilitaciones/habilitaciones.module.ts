import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HabilitacionesPageRoutingModule } from './habilitaciones-routing.module';
import { HabilitacionesPage } from './habilitaciones.page';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    HabilitacionesPageRoutingModule
  ],
  declarations: [HabilitacionesPage]
})
export class HabilitacionesPageModule {}