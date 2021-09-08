import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaActPage } from './carga-act.page';

const routes: Routes = [
  {
    path: '',
    component: CargaActPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaActPageRoutingModule {}
