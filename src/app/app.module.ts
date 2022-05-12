import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TictactoeBoardComponent } from './shared/components/tictactoe-board/tictactoe-board.component';
import { TictactoeBoardSquareComponent } from './shared/components/tictactoe-board-square/tictactoe-board-square.component';
import { RegisterUserComponent } from './shared/components/register-user/register-user.component';
import { LoginComponent } from './shared/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TictactoeBoardComponent,
    TictactoeBoardSquareComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
