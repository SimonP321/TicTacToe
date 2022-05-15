import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';
import { ILogin } from '../../models/interfaces/ILogin';

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
    if (loginForm.password)
      this.authService.login(loginForm);
  }

}
