import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso3Page } from './paso3.page';

const routes: Routes = [
  {
    path: '',
    component: Paso3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso3PageRoutingModule {}
