import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PorContinenteComponent } from './pages/por-continente/por-continente.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisesLayoutComponent } from './layout/paises-layout/paises-layout.component';
import { PaisCardComponent } from './components/pais-card/pais-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PorContinenteComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisesLayoutComponent,
    PaisCardComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
