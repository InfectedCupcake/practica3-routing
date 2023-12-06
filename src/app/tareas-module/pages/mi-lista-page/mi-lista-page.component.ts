import { Component, OnInit, inject} from '@angular/core';
import { Tarea } from '../../models/tarea-model';
import { TareasService } from '../../services/tareas-service.service';

@Component({
  templateUrl: './mi-lista-page.component.html',
  styleUrls: ['./mi-lista-page.component.css']
})
export class MiListaPageComponent implements OnInit{
  tareas: Tarea[] = [];

  //Injectar service x medio de angular v > 14
  private tareasService: TareasService = inject(TareasService)

  //Injectar servicio x construc para toda version de Angular
  constructor(private tareasServiceCons: TareasService){}

  obtenerTareas(){
    this.tareas = this.tareasService.getTareas();
  }

  ngOnInit(): void {
    this.obtenerTareas()
  }

  catchOnStatusChange(){
    this.obtenerTareas()
  }
}
