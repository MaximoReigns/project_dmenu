import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'mcdonald',
    loadChildren: () => import('./mcdonald/mcdonald.module').then( m => m.McdonaldPageModule)
  },
  {
    path: 'casadelosabuelos',
    loadChildren: () => import('./casadelosabuelos/casadelosabuelos.module').then( m => m.CasadelosabuelosPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'hamburguesa-carne',
    loadChildren: () => import('./hamburguesa-carne/hamburguesa-carne.module').then( m => m.HamburguesaCarnePageModule)
  },
  {
    path: 'hamburguesa',
    loadChildren: () => import('./hamburguesa/hamburguesa.module').then( m => m.HamburguesaPageModule)
  },
  {
    path: 'cajita-feliz',
    loadChildren: () => import('./cajita-feliz/cajita-feliz.module').then( m => m.CajitaFelizPageModule)
  },
  {
    path: 'hamburguesa-pollo',
    loadChildren: () => import('./hamburguesa-pollo/hamburguesa-pollo.module').then( m => m.HamburguesaPolloPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
