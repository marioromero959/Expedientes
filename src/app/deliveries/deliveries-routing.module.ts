import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveriesPage } from './deliveries.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveriesPage
  },
   {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },   {
    path: 'modal-cadetes',
    loadChildren: () => import('./modal-cadetes/modal-cadetes.module').then( m => m.ModalCadetesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveriesPageRoutingModule {}
