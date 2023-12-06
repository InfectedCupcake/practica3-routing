import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tareasGuardCanActivate, tareasGuardCanMatch } from './shared/guards/tareas.guard';

const routes: Routes = [
  {
    path: 'tareas',
    loadChildren: () => import('./tareas-module/tareas-module.module').
    then(m => m.TareasModuleModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').
    then(m => m.PaisesModule),
    canActivate: [tareasGuardCanActivate],
    canMatch: [tareasGuardCanMatch]
  },
  {
    path:'**',
    redirectTo: 'tareas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
