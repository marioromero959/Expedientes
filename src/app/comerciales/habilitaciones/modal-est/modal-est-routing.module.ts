import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEstPage } from './modal-est.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEstPageRoutingModule {}
