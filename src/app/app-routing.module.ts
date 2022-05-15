import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './features/guards/authorization/authorization.guard';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TictactoeComponent } from './shared/components/tictactoe/tictactoe/tictactoe.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizationGuard] },
  { path: 'tictactoe/:userOne/:symbolOne/:userTwo/:symbolTwo', component: TictactoeComponent, canActivate: [AuthorizationGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
