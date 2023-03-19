import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'a1-standalone', loadComponent: () => import('../../../project-a/src/app/component/a1/a1.component').then(mod => mod.A1Component)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
