import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso2Page } from './paso2.page';

const routes: Routes = [
  {
    path: '',
    component: Paso2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso2PageRoutingModule {}
