import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paso1PageRoutingModule } from './paso1-routing.module';

import { Paso1Page } from './paso1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paso1PageRoutingModule
  ],
  declarations: [Paso1Page]
})
export class Paso1PageModule {}
