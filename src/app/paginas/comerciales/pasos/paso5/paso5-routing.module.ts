import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paso5Page } from './paso5.page';

const routes: Routes = [
  {
    path: '',
    component: Paso5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paso5PageRoutingModule {}
