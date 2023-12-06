import { Component, inject } from '@angular/core';
import { Continente } from "../../enums/continente-enum"
import { PaisesService } from '../../services/paises.service';
import { SmallCountry } from '../../model/paises.models';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styleUrls: ['./por-continente.component.css']
})
export class PorContinenteComponent {
  
  PaisesService: PaisesService = inject(PaisesService)
  botonesContinente: string[] = Object.values(Continente);
  continenteSeleccionado: string = "";
  paises: SmallCountry[] = [];

  changeContinente(continente: string){
    if (this.continenteSeleccionado == continente) {
      this.continenteSeleccionado = "";
      this.clearPaises();
      return;
    }
    this.continenteSeleccionado = continente;
    //Solicitud al api rest countries
    this.requestContinent();
  }

  clearPaises(){
    this.paises = [];
  }

  requestContinent(){

    this.PaisesService.getCountriesByRegion(this.continenteSeleccionado)
    .subscribe(countries => {
      console.log(countries);
      this.paises = countries
    })
  }

}

