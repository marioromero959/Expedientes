import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalActPage } from './modal-act.page';

const routes: Routes = [
  {
    path: '',
    component: ModalActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalActPageRoutingModule {}
