import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { TareasService } from 'src/app/tareas-module/services/tareas-service.service';

export const tareasGuardCanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  console.log("RouteSnap:", route);
  console.log("StateSnap:", state);
  
return checkTareasList();
};

export const tareasGuardCanMatch: CanMatchFn = (
  route: Route, 
  segments: UrlSegment[]
) => {
  console.log("Route:", route);
  console.log("Segments:", segments);
  
  return checkTareasList();
}

const checkTareasList = (): boolean | Observable<boolean> => {
const tareaService: TareasService = inject(TareasService);
const router: Router = inject(Router);

// if (!tareaService.isTareasEmpty())
//   router.navigate(['tareas', 'nueva-tarea'])

// return tareaService.isTareasEmpty();
return tareaService.isTareasEmpty()
  .pipe(
    tap( (isEmpty) => {
      if (isEmpty)
        router.navigate(['/tareas', '/nueva-tarea']);
    } ),
    map( (isEmpty) => !isEmpty )
  );
}