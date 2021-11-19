import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PorEspecieComponent } from './pages/por-especie/por-especie.component';
import { PorClasificacionComponent } from './pages/por-clasificacion/por-clasificacion.component';
import { PorGeneroComponent } from './pages/por-genero/por-genero.component';
import { PorRescatistaComponent } from './pages/por-rescatista/por-rescatista.component';
import { TableInfoComponent } from './components/table-info/table-info.component';

@NgModule({
  declarations: [
    PorEspecieComponent,
    PorClasificacionComponent,
    PorGeneroComponent,
    PorRescatistaComponent,
    TableInfoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [
    PorEspecieComponent,
    PorClasificacionComponent,
    PorGeneroComponent,
    PorRescatistaComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class EspecieModule {}
