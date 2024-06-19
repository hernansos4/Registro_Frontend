import { MessageService } from 'primeng/api';
import { ResumenClasesService } from './../../services/resumen-clases.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Clase } from 'src/app/modules/clases/interfaces/clases.interface';


@Component({
  selector: 'app-resumen-clases-page',
  templateUrl: './resumen-clases-page.component.html',
  styleUrls: ['./resumen-clases-page.component.css']
})
export class ResumenClasesPageComponent implements OnInit, OnDestroy {

  clases !: Clase[];
  claseId !: number;
  userId !: number;
  estado !: string;

  constructor(private resumenclasesservice: ResumenClasesService, private messageservice: MessageService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem("id")
    this.userId = +(userId || '0')

    this.showClases();

  }
  show() {
    this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Clase actualizada correctamente', life: 10000 });
  }

  showClases() {
    this.resumenclasesservice.showClases().subscribe((res) => {
      this.clases = res;
    });
  }

  updateClase(id_clase: number, estado: 'aprobado' | 'pendiente' | 'reprobado') {
    this.resumenclasesservice.updateClase(id_clase, this.userId, estado).subscribe((res) => {
      console.log(res);
      this.show();
    });
  }

  ngOnDestroy(): void {
  }
}
