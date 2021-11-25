import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercialesPage } from './comerciales.page';

const routes: Routes = [
  {
    path: '',
    component: ComercialesPage
  },
  {
    path: 'comprobante',
    loadChildren: () => import('./comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
  {
    path: 'habilitaciones',
    loadChildren: () => import('./habilitaciones/habilitaciones.module').then( m => m.HabilitacionesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercialesPageRoutingModule {}
