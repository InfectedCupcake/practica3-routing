import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareasKey = "tareas";
  private tareas: Tarea[] = [];

  constructor() {
    const lsTareas = localStorage.getItem(this.tareasKey);

    if (lsTareas) {
      this.tareas = JSON.parse(lsTareas);
    }
  }

  private almacenarDatos(): void {
    localStorage.setItem(this.tareasKey, JSON.stringify(this.tareas));
  }
  
  getTareas() : Tarea[] {
    return this.tareas;
  }

  upDateTarea(index: number, tarea: Tarea){
    this.tareas[index] = tarea;
    this.almacenarDatos();
  }

  agregarTarea(tarea: Tarea){
    this.tareas.push(tarea);
    this.almacenarDatos();
  }

  isTareasEmpty() : Observable<boolean>{
    return of (this.tareas.length <= 0);
  }
  //Para menejar booles
  // isTareasEmpty() : boolean {
  //   return this.tareas.length <= 0;
  // }
  
}
