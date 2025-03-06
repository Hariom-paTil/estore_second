import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      { path: '', redirectTo: '/home/products', pathMatch: 'full' },
      { path: '**', component: Error404Component },
];
