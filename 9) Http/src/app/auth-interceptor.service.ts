import { tap } from 'rxjs/operators';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEventType} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req : HttpRequest<any>, next : HttpHandler){

        // compare thr Url according to request eg if(req.url === )

        const modifiedRequest = req.clone({ headers : req.headers.append('Auth','xyz')})
       console.log(req.url);
        console.log ('Request is on its way');
        // return next.handle(req);
        return next.handle(modifiedRequest).pipe(tap(event =>{
            console.log(event);
            if(event.type === HttpEventType.Response)
            {

                console.log('Response arrived, Body Data:');
                console.log(event.body);
            }
        }))
    }
}