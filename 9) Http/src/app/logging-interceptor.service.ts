import { tap } from 'rxjs/operators';
import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class LoggingInterceptorServices implements HttpInterceptor {
    intercept(req : HttpRequest<any>, next: HttpHandler){
        console.log('OutGoing Request');
        console.log(req.url);
        return next.handle(req).pipe(tap(event =>
            {
                if(event.type === HttpEventType.Response)
                {
                    console.log('Incoming Response');
                    console.log(event.body);
                }
            }))
    }
}