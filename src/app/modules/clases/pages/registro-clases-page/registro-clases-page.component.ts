
import { Router } from '@angular/router';
import { RegistroClasesService } from './../../services/registro-clases.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Carrera } from '../../interfaces/carreras.interface';
import { Clase } from 'src/app/modules/clases/interfaces/clases.interface';


@Component({
  selector: 'app-registro-clases-page',
  templateUrl: './registro-clases-page.component.html',
  styleUrls: ['./registro-clases-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroClasesPageComponent implements OnInit {
  clases !: Clase[];
  selectedClase !: Clase;
  carreras !: Carrera[];
  selectedCarrera !: Carrera;
  nombre !: string;
  unidades_valorativas !: number;
  parent !: number;
  id_carrera !: number;
  name_carrera !: string;

  constructor(private registroclasesservice: RegistroClasesService, private router: Router, private messageService: MessageService) { }
  ngOnInit(): void {

    this.showClases();
    this.infoUsuario();
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ingresado correctamente', life: 10000 });
  }
  showClases() {
    this.registroclasesservice.getClases().subscribe((res) => {
      this.clases = res;
    });
  }


  infoUsuario() {
    const id = localStorage.getItem('id');
    this.registroclasesservice.getInfoUsuario(id || '0').subscribe((res) => {

      console.log(res.carrera.id, res.carrera.nombre);

      this.id_carrera = res.carrera.id;
      this.name_carrera = res.carrera.nombre;
    });
  }


  registrar() {
    if (this.nombre !== '' && this.nombre && this.unidades_valorativas > 0) {
      this.registroclasesservice.setClase(this.nombre, this.unidades_valorativas, this.selectedClase?.id || 0, this.id_carrera)
        .subscribe((res) => {
          console.log(res);
          this.show();
          this.nombre = '';
          this.unidades_valorativas = 0;
          this.parent = 0;
          this.showClases();
        }, err => {
          this.messageService.add({
            severity: 'error', summary: 'Error', detail: 'Llenar correctamente el formulario', life: 10000
          });
        });
    }
    else {
      this.messageService.add({
        severity: 'error', summary: 'Error', detail: 'Llenar correctamente el formulario', life: 10000
      });

      console.log(this.nombre, this.unidades_valorativas, this.parent);
    }
  }





}
