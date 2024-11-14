import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'privacy-cookie',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
  },
  {
    path: 'working',
    loadComponent: () => import('./pages/working/working.component').then(m => m.WorkingComponent),
  },{
    path: 'help',
    loadComponent: () => import('./pages/help-page/help-page.component').then(m => m.HelpPageComponent),
  },
  {
    path: 'authorize',
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent),
  }, {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
