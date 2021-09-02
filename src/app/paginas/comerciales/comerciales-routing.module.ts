import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercialesPage } from './comerciales.page';
import { Paso1Page } from './pasos/paso1/paso1.page';
import { Paso2Page } from './pasos/paso2/paso2.page';
import { Paso3Page } from './pasos/paso3/paso3.page';
import { Paso4Page } from './pasos/paso4/paso4.page';
import { Paso5Page } from './pasos/paso5/paso5.page';
import { Paso6Page } from './pasos/paso6/paso6.page';

const routes: Routes = [
  {
    path: '',
    component: ComercialesPage
  },
  {
    path: '1',
    component: Paso1Page
  },
  {
    path: '2',
    component: Paso2Page
  },
  {
    path: '3',
    component: Paso3Page
  },
  {
    path: '4',
    component: Paso4Page
  },
  {
    path: '5',
    component: Paso5Page
  },
  {
    path: '6',
    component: Paso6Page
  },
  {
    path: 'paso1',
    loadChildren: () => import('./pasos/paso1/paso1.module').then( m => m.Paso1PageModule)
  },
  {
    path: 'paso2',
    loadChildren: () => import('./pasos/paso2/paso2.module').then( m => m.Paso2PageModule)
  },
  {
    path: 'paso3',
    loadChildren: () => import('./pasos/paso3/paso3.module').then( m => m.Paso3PageModule)
  },
  {
    path: 'paso4',
    loadChildren: () => import('./pasos/paso4/paso4.module').then( m => m.Paso4PageModule)
  },
  {
    path: 'paso5',
    loadChildren: () => import('./pasos/paso5/paso5.module').then( m => m.Paso5PageModule)
  },
  {
    path: 'paso6',
    loadChildren: () => import('./pasos/paso6/paso6.module').then( m => m.Paso6PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercialesPageRoutingModule {}
