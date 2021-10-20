import { AuthService } from "./auth-service";
import {ActivatedRouteSnapshot,CanActivate,CanActivateChild,Router,RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService
      .isAuthentication()
      .then((authentication: boolean) => {
        if (authentication) {
          return true;
        } else {
          this.router.navigate(["/"]);
        }
      });
  }
  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot)
                : Observable<boolean> | Promise<boolean> | boolean  {
                    return this.canActivate(route,state);
                }

}
