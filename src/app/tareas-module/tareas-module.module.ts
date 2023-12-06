//Importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Importaciones de modulos propios
import { SharedModule } from '../shared/shared.module';
//Importaciones de los componentes
import { TareasModuleRoutingModule } from './tareas-module-routing.module';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';
import { TareaFormularioComponent } from './components/tarea-formulario/tarea-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MiListaPageComponent,
    FormularioPageComponent,
    TareaCardComponent,
    TareaFormularioComponent
  ],
  imports: [
    CommonModule,
    TareasModuleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class TareasModuleModule { }
