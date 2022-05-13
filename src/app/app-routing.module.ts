import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TictactoeComponent } from './shared/components/tictactoe/tictactoe/tictactoe.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
/*     children: [
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ] */
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
