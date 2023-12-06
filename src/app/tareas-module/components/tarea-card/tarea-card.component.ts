import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Tarea } from '../../models/tarea-model';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { TareasService } from '../../services/tareas-service.service';

@Component({
  selector: 'tareas-module-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent {

  //Injectar service x medio de angular v > 14
  tareasService: TareasService = inject(TareasService);
  
  @Input() 
  tarea!: Tarea;

  @Input("tareaIndex")
  indice: number = -1;

  @Output("onStatusChange") emitter: EventEmitter<TareaStatus>;

  status = {
    Completado: TareaStatus.COMPLETADO,
    Retrasado: TareaStatus.RETRASADO, 
    Pendiente: TareaStatus.PENDIENTE,

}

  constructor(){
    this.emitter = new EventEmitter();
  }

  cambiarStatus(status: TareaStatus): void {
    if (this.indice < 0) {
      return;
    }

    this.tarea.status = status;
    
    this.tareasService.upDateTarea(this.indice, this.tarea); //Se usa el metodo que se creo en el service para actualizar la tarea
    this.emitter.emit(status);

  }

}
