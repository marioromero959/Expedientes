import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadetesPage } from './modal-cadetes.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadetesPageRoutingModule {}
