
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  numero :number = 1;
  texto :string = 'Hola Mundo';
  nombre !: string;
  password !: string;
  constructor(private loginservice: LoginService, private route: Router ) { }

  login(){
    this.loginservice.sendCredentials(this.nombre, this.password)
    .subscribe((res) => {
      console.log(res);
      this.route.navigate(['/home']) 
    })
  }

  incrementar(){
    console.log('incrementar', this.numero, this.numero + 1);
    this.numero = this.numero * 2 ;
  }

  cambiarTexto(
    texto: string
  ){
    this.texto = texto;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  
  }


  ngOnDestroy(): void {
    
  }

}
