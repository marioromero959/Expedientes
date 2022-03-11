import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadStrategyService } from './preload-strategy.service';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    data: {preload:true}
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    data: {preload:true}
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    data: {preload:true}
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule),
    data: {preload:true}
  },
  {
    path: 'verificacion',
    loadChildren: () => import('./verificacion/verificacion.module').then( m => m.VerificacionPageModule)
  },
  {
    path: 'tramites',
    loadChildren: () => import('./tramites/tramites.module').then( m => m.TramitesPageModule)
  },
  {
    path: 'comerciales',
      loadChildren: () => import('./comerciales/comerciales.module').then( m => m.ComercialesPageModule),
      data: {preload:true}
  },
  {
    path: 'atencion',
    loadChildren: () => import('./atencion/atencion.module').then( m => m.AtencionPageModule),
    data: {preload:true}
  },
/*   {
    path: 'deliveries',
    loadChildren: () => import('./deliveries/deliveries.module').then( m => m.DeliveriesPageModule),
    data: {preload:true}
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy:PreloadStrategyService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
