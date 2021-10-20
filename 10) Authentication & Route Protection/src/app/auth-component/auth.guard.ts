import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthServices } from './auth.services';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})
export class AuthGuard  implements CanActivate{
    constructor(private authServices: AuthServices, private router :Router){}
    canActivate(route: ActivatedRouteSnapshot,router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        return this.authServices.user.pipe(take(1), map(user=>{
            const isAuth = !!user;
            if(isAuth){
                return true
            }
            return this.router.createUrlTree(['/auth']);
        }))
    }
}