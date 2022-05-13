import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private cookies: CookieService) { }

  public GetPassword(): string  {
    return this.cookies.get('password');
    // TODO evtl. timer, dass der cookie relöscht wird
  }
}
