import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComercialesPageRoutingModule } from './comerciales-routing.module';
import { ComercialesPage } from './comerciales.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    ComercialesPageRoutingModule
  ],
  declarations: [ComercialesPage]
})
export class ComercialesPageModule {}
