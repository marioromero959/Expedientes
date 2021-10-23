import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercialesPage } from './comerciales.page';

const routes: Routes = [
  {
    path: '',
    component: ComercialesPage
  },
  {
    path: '1',
    loadChildren: () => import('./pasos/paso1/paso1.module').then( m => m.Paso1PageModule)
  },
  {
    path: '2',
    loadChildren: () => import('./pasos/paso2/paso2.module').then( m => m.Paso2PageModule)
  },
  {
    path: '3',
    loadChildren: () => import('./pasos/paso3/paso3.module').then( m => m.Paso3PageModule)
  },
  {
    path: '4',
    loadChildren: () => import('./pasos/paso4/paso4.module').then( m => m.Paso4PageModule)
  },
  {
    path: '5',
    loadChildren: () => import('./pasos/paso5/paso5.module').then( m => m.Paso5PageModule)
  },
  {
    path: '6',
    loadChildren: () => import('./pasos/paso6/paso6.module').then( m => m.Paso6PageModule)
  },
  {
    path: 'comprobante',
    loadChildren: () => import('./comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercialesPageRoutingModule {}
