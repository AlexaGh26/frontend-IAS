import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HistoryComponent } from './components/history/history.component';
import { ExampleComponent } from './pages/example/example.component';
import { RegisComponent } from './components/regis/regis.component';

const routes: Routes = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'history',
        component: HistoryComponent,
      },
      {
        path: 'example',
        component: RegisComponent,
      },
    ],
  },
  { path: '', redirectTo: 'layout/home', pathMatch: 'full', },
  {path: 'calculator', redirectTo: 'layout', pathMatch: 'full', }
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
