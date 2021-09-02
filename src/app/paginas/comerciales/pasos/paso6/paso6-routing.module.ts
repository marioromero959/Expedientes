import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso6Page } from './paso6.page';

const routes: Routes = [
  {
    path: '',
    component: Paso6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso6PageRoutingModule {}
