import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



const routes: Routes = [
  {
    path:'',
    redirectTo: 'clases',
    pathMatch: 'full'
  },
  {
    path:'',
    component: HomePageComponent,
    children: [
      {
        path:'clases',
        loadChildren: () => import('../clases/clases.module').then(m => m.ClasesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
