import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HabilitacionesPageRoutingModule } from './habilitaciones-routing.module';
import { HabilitacionesPage } from './crear-habilitaciones/habilitaciones.page';
import { MaterialModule } from 'src/app/material/material.module';
import { FiltrosDocsPipe } from './filtros-docs.pipe';
import { EditarHabilitacionesPage } from './editar-habilitaciones/editar-habilitaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    HabilitacionesPageRoutingModule
  ],
  declarations: [HabilitacionesPage,FiltrosDocsPipe,EditarHabilitacionesPage]
})
export class HabilitacionesPageModule {}
