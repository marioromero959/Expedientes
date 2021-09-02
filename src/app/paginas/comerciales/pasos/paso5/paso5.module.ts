import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso5PageRoutingModule } from './paso5-routing.module';

import { Paso5Page } from './paso5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paso5PageRoutingModule
  ],
  declarations: [Paso5Page]
})
export class Paso5PageModule {}
