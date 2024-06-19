import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../../services/home-services.service';
import { Carrera } from '../../interfaces/carrera.interface';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  carrera!: Carrera

  constructor(private homeservices: HomeServicesService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.showCarrera();
  }

  async logout() {
    await localStorage.clear();
    this.cookie.set('token', '');
    console.log(this.cookie.get('token'))
    await this.cookie.deleteAll();
    this.router.navigate(['/auth']);
  }

  showCarrera() {
    this.homeservices.showCarrera().subscribe((res) => {
      console.log(res);
      this.carrera = res;
    });
  }

}
