import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorEspecieComponent } from './especie/pages/por-especie/por-especie.component';
import { PorClasificacionComponent } from './especie/pages/por-clasificacion/por-clasificacion.component';
import { PorGeneroComponent } from './especie/pages/por-genero/por-genero.component';
import { PorRescatistaComponent } from './especie/pages/por-rescatista/por-rescatista.component';

const routes: Routes = [
  {
    path: '',
    component: PorEspecieComponent,
    pathMatch: 'full',
  },
  {
    path: 'clasificacion',
    component: PorClasificacionComponent,
  },
  {
    path: 'genero',
    component: PorGeneroComponent,
  },
  {
    path: 'rescatista',
    component: PorRescatistaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
