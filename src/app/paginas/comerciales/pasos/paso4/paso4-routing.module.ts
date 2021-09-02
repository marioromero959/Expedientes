import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso4Page } from './paso4.page';

const routes: Routes = [
  {
    path: '',
    component: Paso4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso4PageRoutingModule {}
