import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilitacionesPage } from './habilitaciones.page';

const routes: Routes = [
  {
    path: '',
    component: HabilitacionesPage
  },
  {
    path: 'modal-act',
    loadChildren: () => import('./modal-act/modal-act.module').then( m => m.ModalActPageModule)
  },
  {
    path: 'modal-est',
    loadChildren: () => import('./modal-est/modal-est.module').then( m => m.ModalEstPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilitacionesPageRoutingModule {}
