import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenClasesPageComponent } from './pages/resumen-clases-page/resumen-clases-page.component';
import { RegistroClasesPageComponent } from './pages/registro-clases-page/registro-clases-page.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'organigrama',
    pathMatch: 'full'
  },
  {
    path: 'resumen',
    component: ResumenClasesPageComponent
  },
  {
    path: 'registro',
    component: RegistroClasesPageComponent
  },
  {
    path: 'organigrama',
    component:OrganigramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
