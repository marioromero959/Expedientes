import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  // Se removio esta pagina hasta actualizacion del backend
/*   {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  }, */
  {
    path: 'tramites',
    loadChildren: () => import('./tramites/tramites.module').then( m => m.TramitesPageModule)
  },
  {
    path: 'comerciales',
      loadChildren: () => import('./paginas/comerciales/comerciales.module').then( m => m.ComercialesPageModule)
  },
  {
    path: 'atencion',
    loadChildren: () => import('./paginas/atencion/atencion.module').then( m => m.AtencionPageModule)
  },
  {
    path: 'deliveries',
    loadChildren: () => import('./paginas/deliveries/deliveries.module').then( m => m.DeliveriesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
