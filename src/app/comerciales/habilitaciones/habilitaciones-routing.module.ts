import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabilitacionesPage } from './crear-habilitaciones/habilitaciones.page';
import { EditarHabilitacionesPage } from './editar-habilitaciones/editar-habilitaciones.page';


const routes: Routes = [
  {
    path: '',
    component: HabilitacionesPage
  },
    {
    path: 'edit',
    component: EditarHabilitacionesPage
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
