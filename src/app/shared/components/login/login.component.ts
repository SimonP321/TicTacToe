import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ILogin } from '../../models/ILogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string = "123456"; // TODO verschlüsseln und vl. in eine datei/db

  constructor(private router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    let loginForm = form.value as ILogin;
    console.log(loginForm);
    
    if (loginForm.password == this.password) {
      this.cookies.set('password', this.password);
      this.router.navigate(['dashboard']);
    }

    /* this.cookies.deleteAll(); */ // TODO
    /* if (password == json(password)) */ // TODO
  }

}
