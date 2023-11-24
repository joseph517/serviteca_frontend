import { Injectable } from '@angular/core';
import { CanMatch, CanActivate, Route, UrlSegment, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch, CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  checkStatus():Observable<boolean>{
    return this.authService.checkAuthentication()
      .pipe(
        tap(
          isAuthenticated => {
            if( isAuthenticated){
              console.log(isAuthenticated)
              this.router.navigate(['/dashboard'])
            }
          }
        ),
        map( isAuthenticated => !isAuthenticated)
      )
  }


  canMatch(route: Route, segments: UrlSegment[]):Observable<boolean>{
      return this.checkStatus()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
      return this.checkStatus()
  }

}
