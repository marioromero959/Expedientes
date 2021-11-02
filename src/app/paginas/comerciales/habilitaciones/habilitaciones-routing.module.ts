import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilitacionesPage } from './habilitaciones.page';

const routes: Routes = [
  {
    path: '',
    component: HabilitacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilitacionesPageRoutingModule {}
