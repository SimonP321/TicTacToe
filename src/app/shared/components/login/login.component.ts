import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from 'src/app/core/authorization.service';
import { environment } from 'src/environments/environment';
import { ILogin } from '../../models/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private cookies: CookieService, private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    let loginForm = form.value as ILogin;
    this.authService.login(loginForm);

    /* this.cookies.deleteAll(); */ // TODO
    /* if (password == json(password)) */ // TODO
  }

}
