import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { A2Component } from './component/a2/a2.component';

const routes: Routes = [
  {path: 'a1-standalone', loadComponent: () => import('./component/a1/a1.component').then(mod => mod.A1Component)},
  {path: 'a2-classic',  component: A2Component },
  {path: 'c1-standalone',  loadChildren: () => import('./app-routing.module').then(mod => mod.ROUTES)},
];

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {path: '', loadComponent: () => import('../../../project-c/src/app/component/c1/c1.component').then(mod => mod.C1Component)},
      {path: 'c3', loadComponent: () => import('../../../project-c/src/app/component/c3/c3.component').then(mod => mod.C3Component)}
    ],
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
