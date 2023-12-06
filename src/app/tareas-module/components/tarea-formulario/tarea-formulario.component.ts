import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { Tarea } from '../../models/tarea-model';
import { TareasService } from '../../services/tareas-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tareas-module-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css']
})
export class TareaFormularioComponent {
  //Declaracion de servicios
  private fb: FormBuilder = inject(FormBuilder) //Crea formularios dinamicos
  private tareasService: TareasService = inject(TareasService); //Injectar service x medio de angular v > 14
  private router: Router = inject(Router); //Permite hacer redirecion de rutas

  tareaFormuario: FormGroup = this.fb.group({
    // campo: [valorInicial, [validadadoresSincronos], [validadoresAscincronos]]
    titulo: ['', [Validators.required, Validators.minLength(5)] ],
    descripcion: ['', [Validators.required, Validators.minLength(5)] ],
  });

  isFieldValid(fiel: string): boolean | null {
    return this.tareaFormuario.controls[fiel].errors && this.tareaFormuario.controls[fiel].touched
  }

  OnFormSubmit(){
    
    if (!this.tareaFormuario.valid) { //Si fallan las validaciones muestra un mensaje de error
      this.tareaFormuario.markAllAsTouched(); 
      return;
    }

    

    const newTarea: Tarea = {
      status: TareaStatus.PENDIENTE,
      titulo: this.tareaFormuario.value['titulo'],
      descripcion: this.tareaFormuario.value['descripcion'],
    }

    console.log(newTarea);

    //Registrar tareas
    this.tareasService.agregarTarea(newTarea);

    //Redirect to mi lista
    this.router.navigate(['tareas','mi-lista']); //Las dos formas de hacer redirecion funcionan igual
    //this.router.navigateByUrl('/tareas/mi-lista');
  }
}
