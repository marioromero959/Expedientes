import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso1Page } from './paso1.page';

const routes: Routes = [
  {
    path: '',
    component: Paso1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso1PageRoutingModule {}
