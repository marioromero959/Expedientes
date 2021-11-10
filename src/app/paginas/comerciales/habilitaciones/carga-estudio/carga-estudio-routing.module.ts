import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaEstudioPage } from './carga-estudio.page';

const routes: Routes = [
  {
    path: '',
    component: CargaEstudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaEstudioPageRoutingModule {}
