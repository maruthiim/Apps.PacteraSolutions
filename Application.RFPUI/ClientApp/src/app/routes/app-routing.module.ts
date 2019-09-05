import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from '../login/login.component';
//import { AppLayoutComponent } from '../app-layout/app-layout.component';
//import { DashboardComponent } from '../dashboard/dashboard.component';
import { routes } from '../routes/routes';

//const routes: Routes = [

//  {
//    path: 'login',
//    component: LoginComponent,
//  },
//  {
//    path: '',
//    component: AppLayoutComponent,
//    children: [
//      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//      { path: 'dashboard', component: DashboardComponent}
//    ]
//  }
//];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
