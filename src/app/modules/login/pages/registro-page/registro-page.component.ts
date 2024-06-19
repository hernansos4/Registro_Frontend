import { MessageService } from 'primeng/api';
import { RegistroService } from './../../services/registro.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Carrera } from 'src/app/modules/clases/interfaces/carreras.interface';
@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroPageComponent implements OnInit {
  carreras !: Carrera[];
  selectedCarrera !: Carrera;
  username !: string;
  password !: string;
  id_carrera !: number;
  confirmar_password !: string;

  constructor(private registroservice: RegistroService, private messageService: MessageService) { }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Ingresado correctamente', life: 10000 });
  }

  ngOnInit(): void {
    this.ShowCarreras();
  }

  ShowCarreras() {
    this.registroservice.getCarreras().subscribe((res) => {
      this.carreras = res;
    });
  }

  setUser() {
    if (this.username !== '' && this.username && this.password !== '' && this.password && this.selectedCarrera.id > 0) {
      this.registroservice.setUser(this.username, this.password, this.selectedCarrera.id)
        .subscribe((res) => {
          console.log(res);
          this.show();
          this.username = '';
          this.password = '';
          this.id_carrera = 0;
        }, err => {
          this.messageService.add({
            severity: 'error', summary: 'Error', detail: 'Llenar correctamente el formulario', life: 10000
          });
        }
        );
    } else {
      this.messageService.add({
        severity: 'error', summary: 'Error', detail: 'Llenar correctamente el formulario', life: 10000
      });

      console.log(this.username, this.password, this.id_carrera);
    }
  };
}


