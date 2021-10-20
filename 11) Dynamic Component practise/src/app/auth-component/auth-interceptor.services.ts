import { take, exhaustMap } from 'rxjs/operators';
import { AuthServices } from './auth.services';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authServices: AuthServices){}

    intercept(req: HttpRequest<any>, next: HttpHandler)
    {
        return this.authServices.user.pipe(take(1),exhaustMap(user=>{
            if(!user){
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth',user.token)
            });
            return next.handle(modifiedReq);
        }))
    }


}