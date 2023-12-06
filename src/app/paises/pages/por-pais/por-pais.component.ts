import { Component, inject } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { SmallCountry } from '../../model/paises.models';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  private paisesService: PaisesService = inject(PaisesService)
  paises: SmallCountry[] = []

  
  onEnterPressed(valor: string) {
    console.log("Oa 🙌", valor);
    valor = valor.trim();
    if (valor.length == 0) {
      alert("Aaaaaaaaaaaaaaa");
    }
  }

  buscarPaisesPorNombre(nombre: string): void {
    
  }
}
