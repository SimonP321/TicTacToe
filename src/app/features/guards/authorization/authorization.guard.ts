import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from 'src/app/core/services/authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor (private authService: AuthorizationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isAuth: boolean = this.authService.isAuthorizated();
      if (!isAuth) {
        this.router.navigate(['login']);
      }

      /* this.authService.removeAuthorization(); */ // TODO with timer (vl. observable)
      return isAuth;
  }
  
}
