import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../model/paises.models';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  PaisesService: PaisesService = inject(PaisesService)
  pais!: Country;

  constructor(){
  }

  ngOnInit(): void{
    //Volver a utlizar el service para traer datos
    this.activatedRoute.params.pipe(
      switchMap(({cca3}) => this.PaisesService.getCoutryByCca3(cca3))
      //switchMap(({cca3}) => of(cca3))

    ).subscribe((pais)=> {
        //Guardar la info para mostrarla despues
        console.log(pais);
        this.pais = pais;
    }
  );
  }

}
