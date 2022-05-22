import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/shared/models/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class TictactoeBoardResolver implements Resolve<IUser[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    const user: IUser[] = [{
      user: route.paramMap.get('userOne') as string,
      symbol: route.paramMap.get('symbolOne') as string
    },
    {
      user: route.paramMap.get('userTwo') as string,
      symbol: route.paramMap.get('symbolTwo') as string
    }];


    return of<IUser[]>(user);

/*     let s = "asdoöij";
    return of(s); */
  }
}
