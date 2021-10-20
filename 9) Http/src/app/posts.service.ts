import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Post } from './Post.model';
import {catchError, map, tap} from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { setMaxListeners } from 'process';

@Injectable({
    providedIn:'root'
})

export class PostsService
{

    error = new Subject<string>();
    constructor(private http : HttpClient) {     }

    createandSavePost(postData: Post)
    {
        this.http.post<{name: string}>('https://ng-complete-guide-b650a-default-rtdb.firebaseio.com/posts.json',postData ,
        {
          // body
          observe :'response',
          responseType:'json'
          // text etc
        }
        )
        .subscribe(responseData => {
          console.log(responseData);
          // responseData.body
        },
         error => {
             this.error.next(error.message);
        });

    }

    fetchingData()
    {

      let searchParam = new HttpParams()
      searchParam = searchParam.append('print','pretty');
      searchParam = searchParam.append('custom','key');
      return this.http.get<{[key:string]: Post}>('https://ng-complete-guide-b650a-default-rtdb.firebaseio.com/posts.json',
      {
        headers : new HttpHeaders({'Custom-header':'Hello'}),
        params : searchParam  
      }
      )
        .pipe(map((responseData) =>
          {
            const postArray:Post[] = [];
            for(const key in responseData)
            {
              if(responseData.hasOwnProperty(key))
              {
                postArray.push({...responseData[key] , id : key});
              }
            }
            return postArray;
          }),catchError(errorRes =>{
                return throwError(errorRes);
          })
          );
    }

    clearData()
    {
        return this.http.delete<{[key:string]: Post}>('https://ng-complete-guide-b650a-default-rtdb.firebaseio.com/posts.json',
        {
          observe : 'events',
          responseType : 'json'

        }).pipe(tap(event =>{
          if(event.type === HttpEventType.Sent)
          {
            //...
          }
          if(event.type === HttpEventType.Response)
          {
            console.log(event.body);
          }
        }))
    }
}