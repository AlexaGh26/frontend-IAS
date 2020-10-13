import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'registration',
        component: RegistrationComponent, // another child route component that the router renders
      },
      {
        path: 'history',
        component: HistoryComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(
    private route: ActivatedRoute,
  ) {}

 
}
