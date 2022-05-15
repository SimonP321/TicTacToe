import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { TictactoeComponent } from './shared/components/tictactoe/tictactoe/tictactoe.component';
import { TictactoeBoardComponent } from './shared/components/tictactoe/tictactoe-board/tictactoe-board.component';
import { TictactoeSquare } from './shared/models/tictactoe/tictactoe-board-square';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TictactoeComponent,
    TictactoeBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService, TictactoeSquare],
  bootstrap: [AppComponent]
})
export class AppModule { }
