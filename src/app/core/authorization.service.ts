import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { ILogin } from '../shared/models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private password: string = environment.password;

  constructor(private router: Router, private cookies: CookieService) { }

  login(loginData: ILogin) {
    if (loginData.password == this.password) {
      this.cookies.set('password', this.password);
      this.router.navigate(['dashboard']);
    }
  }

  isAuthorizated(): boolean {
    if (this.cookies.get('password') == this.password) {
      return true;
    }
    return false;
  }

  removeAuthorization(): boolean {
    try {
      this.cookies.delete('password');
    } catch (error) {
      return false;
    }
    return true;
  }
}
