import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasesRoutingModule } from './clases-routing.module';
import { ResumenClasesPageComponent } from './pages/resumen-clases-page/resumen-clases-page.component';
import { FormsModule } from '@angular/forms';
import { RegistroClasesPageComponent } from './pages/registro-clases-page/registro-clases-page.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    ResumenClasesPageComponent,
    RegistroClasesPageComponent,
    OrganigramaComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    FormsModule,
    ToastModule,
    DropdownModule
  ],
})
export class ClasesModule { }
